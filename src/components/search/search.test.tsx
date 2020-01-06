import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Search from "./search";

describe("Test for Product Component", () => {
  beforeEach(() => {});

  it("Should need to have a search cancel button", () => {
    const { container, getByPlaceholderText } = render(
      <Search filter={""} handlePress={() => {}} />
    );
    const input = getByPlaceholderText("Produtos");

    fireEvent.change(input, { target: { value: "teste" } });

    const cancelButton = container.querySelector("button");

    expect(cancelButton).not.toBeNull();
  });

  it("Should clear the input when click in cancel button", () => {
    const { container, getByPlaceholderText } = render(
      <Search filter={""} handlePress={() => {}} />
    );
    const input = getByPlaceholderText("Produtos");

    fireEvent.change(input, { target: { value: "teste" } });

    const cancelButton = container.querySelector("button") as HTMLElement;

    fireEvent.click(cancelButton, {});

    expect(input.textContent).toBe("");
  });

  it("Should send event with  Enter key", () => {
    let filter = "";
    const functionMock = () => {
      filter = "produto";
    };

    const { getByPlaceholderText } = render(
      <Search filter={filter} handlePress={functionMock} />
    );
    const input = getByPlaceholderText("Produtos");

    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    expect(filter).toBe("produto");
  });
});
