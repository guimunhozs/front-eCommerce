import React from "react";
import Pagination from "./pagination";

import { render, fireEvent } from "@testing-library/react";

describe("Test for Pagination Component", () => {
  it("Should click in number pagination buttom", () => {
    let clicked = false;

    const receiveHandlerClick = () => {
      clicked = true;
    };

    const { container, getByText } = render(
      <Pagination
        numberProducts={100}
        limitProductPage={10}
        currentPage={2}
        handleClick={() => receiveHandlerClick()}
      />
    );

    const paginationNumberButton = getByText("1");

    fireEvent.click(paginationNumberButton);

    expect(clicked).toBe(true);
  });

  it("Should click in arrow pagination buttom", () => {
    let clicked = 0;

    const receiveHandlerClick = () => {
      clicked++;
    };

    const { container } = render(
      <Pagination
        numberProducts={10}
        limitProductPage={10}
        currentPage={1}
        handleClick={() => receiveHandlerClick()}
      />
    );

    const arrowButtonAllLeft = container.querySelector(
      ".fa-angle-double-left"
    ) as HTMLElement;
    const arrowButtonLeft = container.querySelector(
      ".fa-angle-left"
    ) as HTMLElement;
    const arrowButtonAllRight = container.querySelector(
      ".fa-angle-double-right"
    ) as HTMLElement;
    const arrowButtonRight = container.querySelector(
      ".fa-angle-right"
    ) as HTMLElement;

    fireEvent.click(arrowButtonAllLeft);
    fireEvent.click(arrowButtonLeft);
    fireEvent.click(arrowButtonAllRight);
    fireEvent.click(arrowButtonRight);

    expect(clicked).toBe(4);
  });
});
