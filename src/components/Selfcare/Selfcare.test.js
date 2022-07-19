import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import SelfCare from "./index.js";

test("A link renders on the page", () => {
  render(<SelfCare />);
  const yogaLink = screen.getByText(/Yoga/);
  expect(yogaLink).toBeInTheDocument();
});
