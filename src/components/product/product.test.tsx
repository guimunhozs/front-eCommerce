import React from "react";
import Product from "./product";

import { render } from "@testing-library/react";

const item = {
  name: "nome produto",
  category: "categoria produto",
  price: 100,
  discount: 10,
  image: ["http://teste1.jpg", "http://teste2.jpg"]
};

describe("Test for Product Component", () => {
  it("Should show total images in props product with GetImage", () => {
    const { container, getByAltText } = render(<Product product={item} />);
    let images = [];
    images = item.image.map((element, index) => {
      getByAltText("Imagem " + index + " do produto").getAttribute("src");
    });
    expect(images.length).toEqual(item.image.length);
  });

  it("Should show price and price w/discount", () => {
    const { container } = render(<Product product={item} />);

    const productPrice = container.querySelectorAll("p")[1].textContent;
    const valueExpected = "100,00 por 90,00";

    expect(productPrice).toBe(valueExpected);
  });

  it("Should show product Name and Category", () => {
    const { getByText } = render(<Product product={item} />);
    const productName = getByText("nome produto");
    const productCategory = getByText("categoria produto");

    expect(productName.textContent).toEqual(item.name);
    expect(productCategory.textContent).toEqual(item.category);
  });
});
