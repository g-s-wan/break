import "@testing-library/jest-dom";
import React from "react";
import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import {BrowserRouter} from "react-router-dom";
import Tutorials from "../src/Tutorials";
import Trainer from "../src/Trainer";
import {getMockJson} from "./mockJson";
import jest from "jest-mock";
import selectEvent from 'react-select-event'

/**
 * This is our testing file. Before running these tests, make sure that the correct initialJson is uncommented within the App
 * class. To run these tests, cd into the frontend and enter "npm test" into the terminal.
 */

let mockResponse = getMockJson(8);
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse).then(response => {
        return response;
      }),
    }),
) as jest.Mock<any>;

/**
 * This tests that the landing page contains the correct elements when rendered
 */
test("landing page renders", async () => {
  render(<App/>, {wrapper: BrowserRouter})
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading).toContainHTML("Breaking");

  const tutorialsButton = screen.getAllByRole("button")[0];
  const trainerButton = screen.getAllByRole("button")[1];
  expect(tutorialsButton).toBeInTheDocument();
  expect(trainerButton).toBeInTheDocument();
  expect(tutorialsButton).toContainHTML("Tutorials");
  expect(trainerButton).toContainHTML("Trainer");
});

/**
 * This tests that the tutorials page contains the correct elements when rendered
 */
test("tutorial page renders", async () => {
  render(<Tutorials/>, {wrapper: BrowserRouter});
  const navbar = screen.getByRole("navigation");
  expect(navbar).toBeInTheDocument();

  expect(screen.getByRole("main")).toBeInTheDocument();

  // We expect there to be 21 total moves
  expect(screen.getAllByLabelText("Tutorial Video")[20]).toBeInTheDocument();

  expect(screen.getByTestId("difficulty-select")).toBeInTheDocument();
});

/**
 * This tests that the trainer page updates when the user applies the easy filter
 */
test("easy filter works", async () => {
  render(<Tutorials/>, {wrapper: BrowserRouter});

  const dropdown = screen.getByText('Select...');

  fireEvent.keyDown(dropdown, {
    key: 'ArrowDown',
    code: 40
  });

  fireEvent.click(screen.getByText("Easy"));

  // We expect there to be 11 total moves
  expect(screen.getAllByLabelText("Tutorial Video")[10]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Tutorial Video")[11]).toBeUndefined();
});

/**
 * This tests that the trainer page updates when the user applies the medium filter
 */
test("medium filter works", async () => {
  render(<Tutorials/>, {wrapper: BrowserRouter});

  const dropdown = screen.getByText('Select...');

  fireEvent.keyDown(dropdown, {
    key: 'ArrowDown',
    code: 40
  });

  fireEvent.click(screen.getByText("Medium"));

  // We expect there to be 6 total moves
  expect(screen.getAllByLabelText("Tutorial Video")[5]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Tutorial Video")[6]).toBeUndefined();
});

/**
 * This tests that the trainer page updates when the user applies the hard filter
 */
test("hard filter works", async () => {
  render(<Tutorials/>, {wrapper: BrowserRouter});

  const dropdown = screen.getByText('Select...');

  fireEvent.keyDown(dropdown, {
    key: 'ArrowDown',
    code: 40
  });

  fireEvent.click(screen.getByText("Hard"));

  // We expect there to be 4 total moves
  expect(screen.getAllByLabelText("Tutorial Video")[3]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Tutorial Video")[4]).toBeUndefined();
});

/**
 * This tests that the trainer page updates when the user applies multiple filters in succession
 */
test("successive filtering works", async () => {
  render(<Tutorials/>, {wrapper: BrowserRouter});

  let dropdown = screen.getByText('Select...');

  // Apply Easy filter
  fireEvent.keyDown(dropdown, {
    key: 'ArrowDown',
    code: 40
  });

  fireEvent.click(screen.getByText("Easy"));

  expect(screen.getAllByLabelText("Tutorial Video")[10]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Tutorial Video")[11]).toBeUndefined();

  // Apply All filter
  dropdown = screen.getByText("Easy");
  fireEvent.click(dropdown);
  fireEvent.keyDown(dropdown, {
    key: 'ArrowDown',
    code: 40
  });

  fireEvent.click(screen.getByText("All"));

  expect(screen.getAllByLabelText("Tutorial Video")[20]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Tutorial Video")[21]).toBeUndefined();

  dropdown = screen.getByText("All");
  fireEvent.click(dropdown);
  fireEvent.keyDown(dropdown, {
    key: 'ArrowDown',
    code: 40
  });

  fireEvent.click(screen.getByText("Hard"));

  expect(screen.getAllByLabelText("Tutorial Video")[3]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Tutorial Video")[4]).toBeUndefined();
});

/**
 * This tests that the trainer page renders correctly
 */
test("trainer page renders", async () => {
  render(<Trainer />, {wrapper: BrowserRouter});
  expect(fetch).toHaveBeenCalledWith("http://localhost:3230/generate?length=8")

  const navbar = screen.getAllByRole("navigation")[0];
  expect(navbar).toBeInTheDocument();
  expect(navbar).toContainHTML("Tutorials");
  expect(navbar).toContainHTML("Trainer");

  // Initial/default call to first populate the page

  // expect(screen.getByRole("list")).toBeInTheDocument();
  // // Default sequence is 8 moves long
  // expect(screen.getAllByRole("listitem")[7]).toBeInTheDocument();

  expect(screen.getByRole("main")).toBeInTheDocument();

  const dropdown = screen.getByRole("select");
  expect(dropdown).toBeInTheDocument();

  const generateButton = screen.getAllByRole("button")[2];
  expect(generateButton).toBeInTheDocument();
  expect(generateButton).toContainHTML("Generate New Sequence");

  expect(screen.getByRole("list")).toBeInTheDocument();
});

/**
 * This tests that the Generate button works as expected
 */
test("generating new sequences works", async () => {
  render(<Trainer />, {wrapper: BrowserRouter});

  const dropdown = screen.getByRole("select");
  const generateButton = screen.getAllByRole("button")[2];

  // Generate an 8-move sequence
  await userEvent.selectOptions(dropdown, ["8"]);
  await userEvent.click(generateButton);

  expect(fetch).toHaveBeenCalledWith("http://localhost:3230/generate?length=8");

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")[7]).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")[8]).toBeUndefined();
  expect(screen.getByRole("main")).toBeInTheDocument();

  // Generate a 4-move sequence
  mockResponse = getMockJson(4);
  await userEvent.selectOptions(dropdown, ["4"]);
  await userEvent.click(generateButton);
  expect(fetch).toHaveBeenCalledWith("http://localhost:3230/generate?length=4")

  expect(fetch).toHaveBeenCalled();
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")[3]).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")[4]).toBeUndefined();
  expect(screen.getByRole("main")).toBeInTheDocument();
});