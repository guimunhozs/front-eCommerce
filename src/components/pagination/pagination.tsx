import React, { useState, useEffect } from "react";

import { PaginationBox } from "./pagination.css";

type props = {
  productQuantity: number,
  total: number,
  page: number,
  handleClick: any,
}


const Pagination = (props: props) => {

  const [numberPage, setNumberPage] = useState(0);

  useEffect(() => {
    setNumberPage(Math.ceil(props.total / props.productQuantity) || 0);
  }, [props.total, props.page, props.productQuantity, numberPage]);

  const pageCalculator = (numPage: number) => {
    if(numPage<1){
      return 1;
    } else if(numPage> numberPage){
      return numberPage;
    } else {
      return props.handleClick(numPage);
    }
  }

  const handleNumberPagination = () => {
    const numberPage = Array.from(Array((Math.ceil(props.total / props.productQuantity || 0))).keys());
    return numberPage.map((index) =>
      <button key={index + 1} className={'buttonPage ' + (index + 1 === props.page ? 'selected' : '')} onClick={() => props.handleClick(index + 1)}>{index + 1}</button>
    )
  }

  return (
    <div className="productPage">
      <PaginationBox>
        <button className="fa fa-angle-double-left buttonPage" onClick={() => props.handleClick(1)}></button>
        <button className="fa fa-angle-left buttonPage" onClick={() => pageCalculator(props.page - 1)}></button>

        { handleNumberPagination() }

        <button className="fa fa-angle-right buttonPage" onClick={() => pageCalculator(props.page + 1)}/>
        <button className="fa fa-angle-double-right buttonPage" onClick={() => props.handleClick(numberPage)} />
      </PaginationBox>
    </div>
  );
}

export default Pagination;