import { render, screen } from "@testing-library/react";
import { test, jest, expect } from "@jest/globals";
import Quote from "./index.js";

test("A quote is rendered with text and an author", function () {
  //arrange
  const quote = {
    author: "Charles Dickens",
    text: "Covent Garden is looking beautiful today - I used to work nearby",
  };
  //render
  render(<Quote />);
  const heading = screen.getByRole("h3");
  expect(heading).toBeInTheDocument();
  //assert  - expext
});
//what are we testing function ListDisplay({ list, tickItem })
//prepare variables
//call function
//what do we expect

// 👉 1.5: For ListDisplay:

// Test that the <ol> element contains the correct number of components.
// Hint: <li> elements by default have a listitem ARIA/accessibility role and React Testing library provides a getAllByRole query (for grabbing multiple elements matching a given role).

// test('List Display function that there is an ordered list', function () {
//    let list =
//    [{ name: "Oranges", completed: false, id: 1 },
//     { name: "Tea", completed: false, id: 2}]

//     const tickItem = jest.fn()
//     render(<ListDisplay list={list} tickItem = {tickItem}  />)
//     //what do I expect to see
//     const olElement = screen.getByRole('list')
//     expect(olElement).toBeInTheDocument()
// })

// test('the number of list items rendered are two', function () {
//     let list =
//     [{ name: "Oranges", completed: false, id: 1 },
//      { name: "Tea", completed: false, id: 2}]

//      const tickItem = jest.fn()
//      render(<ListDisplay list={list} tickItem = {tickItem}  />)
//      //what do I expect to see
//     const items = screen.getAllByRole('listitem')
//     expect(items.length).toBe(2)
//     console.log(items)
//  })

//  test('ordered list contains 2 list items', function () {
//     let list =
//     [{ name: "Oranges", completed: false, id: 1 },
//      { name: "Tea", completed: false, id: 2}]

//      const tickItem = jest.fn()
//      render(<ListDisplay list={list} tickItem = {tickItem}  />)
//      //what do I expect to see
//     const items = screen.getAllByRole('listitem')
//     expect(items.length).toBe(2)
//     console.log(items)
//  })
