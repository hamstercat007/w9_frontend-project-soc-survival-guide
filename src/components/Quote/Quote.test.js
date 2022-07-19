import { render, screen } from "@testing-library/react";
import { test, jest, expect } from "@jest/globals";
import Quote from "./index.js";

test("A quote is rendered with a h3 element", async () => {
  const quote = {
    author: "Charles Dickens",
    text: "Covent Garden is looking beautiful today - I used to work nearby",
  };
  render(<Quote />);
  const heading = await screen.findByRole("heading", { level: 3 });
  expect(heading).toBeInTheDocument();
});
