import React from "react";

import { ProductBox, ImageBox, ProductInfo, ProductBoxText, ProductName, ProducType, ProductPrice, DiscountPrice } from "./product.css";

type props = {
  product: {
    image: string[],
    name: string,
    category: string,
    price: number,
    discount: number
  }
};

const Product = (props: props)  => {

  const getImage = () => {
    return props.product.image.map((item, index) =>
      <img src={item} key={index} alt={"Imagem" + index + "do produto"}></img>
    );
  }

  const getFinalPrice = () => {
    return (props.product.price - (props.product.price * props.product.discount) / 100).toFixed(2).toString().replace(".", ",");
  }

  return (
    <ProductBox>
      <ImageBox>
        { getImage() }
      </ImageBox>
      <ProductInfo>
        <ProductBoxText>
          <ProductName>{ props.product.name }</ProductName>
          <ProducType>{ props.product.category }</ProducType>
        </ProductBoxText>
        <ProductPrice><DiscountPrice><del>{ props.product.price.toFixed(2).toString().replace(".", ",") }</del> por </DiscountPrice>{ getFinalPrice() }</ProductPrice>
      </ProductInfo>
    </ProductBox>
    );
}

export default Product;