import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import SelfCare from "./index.js";

test("A link renders on the page", () => {
  render(<SelfCare />);
  const yogaLink = screen.getByText(/Yoga/);
  expect(yogaLink).toBeInTheDocument();
});

test("the yoga link has the yoga video address", () => {
  render(<SelfCare />);
  expect(screen.getByTestId("yoga1")).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=ngQxxLnJ-5I"
  );
});
