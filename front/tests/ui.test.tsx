import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import {BrowserRouter} from "react-router-dom";
import Tutorials from "../src/Tutorials";
import Trainer from "../src/Trainer";
import {getMockJson} from "./mockJson";
import jest from "jest-mock";

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
  expect(navbar).ToBeInTheDocument();

  expect(screen.getByRole("main")).toBeInTheDocument();
  // We expect there to be 21 (?) moves - should fail rn
  expect(screen.getAllByLabelText("Tutorial Video")[20]).toBeInTheDocument();
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

  expect(screen.getByRole("list")).toBeInTheDocument();
  // Default sequence is 8 moves long
  expect(screen.getAllByRole("listitem")[7]).toBeInTheDocument();
  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(screen.getByRole("select")).toBeInTheDocument();

  const generateButton = screen.getAllByRole("button")[2];
  expect(generateButton).toBeInTheDocument();
  expect(generateButton).toContainHTML("Generate New Sequence");
});