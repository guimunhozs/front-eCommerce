import React, { Component } from "react";

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

type state = {
  value: string
};

export default class Product extends Component<props, state> {

  getImage(){
    return this.props.product.image.map((item, index) =>
      <img src={item} key={index} alt={"Imagem" + index + "do produto"}></img>
    );
  }

  getFinalPrice() {
    return (this.props.product.price - (this.props.product.price * this.props.product.discount) / 100).toFixed(2).toString().replace(".", ",");
  }

  render() {
    return (
      <ProductBox>
      { console.log( this.props.product) }
        <ImageBox>
         {this.getImage()}
        </ImageBox>
        <ProductInfo>
          <ProductBoxText>
            <ProductName>{this.props.product.name}</ProductName>
            <ProducType>{this.props.product.category}</ProducType>
          </ProductBoxText>
          <ProductPrice><DiscountPrice><del>{this.props.product.price.toFixed(2).toString().replace(".", ",")}</del> por </DiscountPrice>{this.getFinalPrice()}</ProductPrice>
        </ProductInfo>
      </ProductBox>
    );
  }
}