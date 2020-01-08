import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Home from "./home";

describe("Test for Product Component", () => {
  it("Should change value select and product list", () => {
    const { container, getByText } = render(<Home />);
    const select = container.querySelector("select") as HTMLElement;
    fireEvent.change(select, { target: { value: 32 } });
    expect(getByText("32 produtos por páginas")).toHaveTextContent(
      "32 produtos por páginas"
    );
  });
});
