import "@testing-library/jest-dom";
import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { registerCommand } from "../src/components/InputBox";
import { mockFilter } from "./MockAPI";
import { mockSearch } from "./MockAPI";
import App from "../src/App";

/**
 * This is our testing file. Before running these tests, make sure that the correct initialJson is uncommented within the App
 * class. To run these tests, cd into the frontend and enter "npm test" into the terminal.
 */

let history: HTMLElement;
let input: HTMLInputElement;
let button: HTMLElement;

//Registering our mock functions
function initFuncMap(){
  registerCommand("mock_filter", mockFilter)
  registerCommand("mock_search", mockSearch);
}

beforeEach(() => {
 window.HTMLElement.prototype.scrollIntoView = function() {};
  render(<App />);
  initFuncMap();
  history = screen.getByTestId("repl-history");
  input = screen.getByTestId("input-box")
  button = screen.getByTestId("submit-button");
})

/**
 * This tests a basic mock_filter.
 */
test("filter simple", async () => {
  let user = userEvent.setup();
  await userEvent.type(input, "mock_filter 180 180 -180 -180");
  await user.click(button);
  console.log(history.nodeValue)
  expect(history.textContent).toBe("Command Success")
});

/**
 * This tests that the correct error is returned by mock_filter when no arguments are provided.
 */
test("filter no parameters error", async () => {
  let user = userEvent.setup();
  await userEvent.type(input, "mock_filter");
  await user.click(button);
  expect(history.textContent).toBe(
    "Error: Please enter parameters: maxlat, maxlon, minlat, minlon"
  );
});

/**
 * This tests that the correct error is returned by mock_filter when non-numerical arguments are given.
 */
test("filter non-numerical parameters given", async () => {
  let user = userEvent.setup();
  await userEvent.type(input, "mock_filter a b c d");
  await user.click(button);
  expect(history.textContent).toBe(
    "Error: Please only enter numeric arguments"
  );
});

/**
 * This tests a basic mock_search.
 */
test("search simple", async () => {
  let user = userEvent.setup();
  await userEvent.type(input, "mock_search hi");
  await user.click(button);
  expect(history.textContent).toBe("Command Success");
});

/**
 * This tests that the correct error message is returned by mock_search when no arguments are provided.
 */
test("search no parameters", async () => {
  let user = userEvent.setup();
  await userEvent.type(input, "mock_search");
  await user.click(button);
  expect(history.textContent).toBe(
    "Error: Searchjson command needs 1 argument: keyword(s) Hint: Use %20 where you would have spaces."
  );
});

/**
 * This tests that the correct error message is returned by mock_search when more than the accepted
 * number of arguments are provided.
 */
test("search too many parameters", async () => {
  let user = userEvent.setup();
  await userEvent.type(input, "mock_search hi yuh");
  await user.click(button);
  expect(history.textContent).toBe(
    "Error: Searchjson command needs 1 argument: keyword(s) Hint: Use %20 where you would have spaces."
  );
});

/**
 * This tests that the user can submit their input using the enter button.
 */
test("entering with button", async () =>{
  let user = userEvent.setup();
  await userEvent.type(input, "mock_filter 1 2 3 4");
  await user.keyboard('{Enter}')  
  expect(history.textContent).toBe("Command Success");
})

/**
 * This tests that the correct message is displayed when the user inputs an invalid command.
 */
test("invalid command", async ()=> {
  let user = userEvent.setup();
  await userEvent.type(input, "hi");
  await user.click(button);  
  expect(history.textContent).toBe("Invalid command");
})


  



