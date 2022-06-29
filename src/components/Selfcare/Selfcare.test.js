import { fireEvent, render, screen } from "@testing-library/react";
import { test, jest, expect } from "@jest/globals";
import SelfCare from "./index.js";

test("A link renders on the page", () => {
  render(<SelfCare />);
  const yogaLink = screen.getByText(/Yoga/);
  expect(yogaLink).toBeInTheDocument()

});

test("the yoga link has the yoga video address", () => {
  render(<SelfCare />);
  expect(screen.getByTestId('yoga1')).toHaveAttribute('href', 'https://www.youtube.com/watch?v=ngQxxLnJ-5I');
})


// expect(link).closest("a").toHaveAttribute('href', 'https://www.youtube.com/watch?v=ngQxxLnJ-5I')


// expect(screen.getByText('Click Me').closest('a')).toHaveAttribute('href', 'https://www.test.com/')
