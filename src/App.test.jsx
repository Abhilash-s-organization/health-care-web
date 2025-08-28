import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders static content correctly", () => {
    render(<App />);

    // Check that headings exist
    expect(screen.getByRole("heading", { name: /welcome to health care/i })).to
      .exist;
    expect(screen.getByRole("heading", { name: /made with ❤️/i })).to.exist;

    // Check that logos exist
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).to.exist;
    expect(reactLogo).to.exist;

    // Check href attributes
    expect(viteLogo.closest("a")?.getAttribute("href")).to.equal(
      "https://vite.dev"
    );
    expect(reactLogo.closest("a")?.getAttribute("href")).to.equal(
      "https://react.dev"
    );
  });
});
