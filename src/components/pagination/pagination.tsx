import React, { useState, useEffect } from "react";

import { PaginationBox } from "./pagination.css";
import { pagination } from "./../../libs/calculatePages";

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
  }, [props.total, props.page, props.productQuantity]);

  const pageCalculator = (numPage: number) => {
    if(numPage<1){
      return 1;
    } else if(numPage> numberPage){
      return numberPage;
    } else {
      return props.handleClick(numPage);
    }
  }

  const changePage = (page: number) => {
    props.handleClick(page)
  };

  const handleNumberPagination = () => {
    const calcPages = numberPage? pagination(props.page, numberPage) : [];
  
    return calcPages.map((element, index) => { 
      if(element === '...') {
       return <button key={index} className='buttonPage' disabled>{element}</button>
      } else {
       return <button key={index} className={'buttonPage ' + (element === props.page ? 'selected' : '')} onClick={() => changePage(+element)}>{element}</button>
      }
    });

  }

  return (
    <div className="productPage">
      <PaginationBox>
        <button className="fa fa-angle-double-left buttonPage" onClick={() => changePage(1)}></button>
        <button className="fa fa-angle-left buttonPage" onClick={() => pageCalculator(props.page - 1)}></button>

        { handleNumberPagination() }

        <button className="fa fa-angle-right buttonPage" onClick={() => pageCalculator(props.page + 1)}/>
        <button className="fa fa-angle-double-right buttonPage" onClick={() => changePage(numberPage)} />
      </PaginationBox>
    </div>
  );
}

export default Pagination;