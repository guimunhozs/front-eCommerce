import React, { useState, useEffect } from "react";

import { PaginationBox } from "./pagination.css";
import { pagination } from "./../../libs/calculatePages";

type props = {
  limitProductPage: number;
  numberProducts: number;
  currentPage: number;
  handleClick: any;
};

const Pagination = (props: props) => {
  const [numberPage, setNumberPage] = useState(0);
  const [paginationConfig, setPaginationConfig] = useState({
    hasDotBefore: false,
    hasDotAfter: false,
    rangePagesShow: [] as number[]
  });

  useEffect(() => {
    setNumberPage(
      Math.ceil(props.numberProducts / props.limitProductPage) || 0
    );
    setPaginationConfig(pagination(7, 10));
    console.log(paginationConfig);
  }, [props.numberProducts, props.currentPage, props.limitProductPage]);

  const pageCalculator = (numPage: number) => {
    if (numPage < 1) {
      return 1;
    } else if (numPage > numberPage) {
      return numberPage;
    } else {
      return props.handleClick(numPage);
    }
  };

  const changePage = (page: number) => {
    props.handleClick(page);
  };

  const handleNumberPagination = () => {
    // setPaginationConfig(pagination(props.currentPage, props.totalPages));
    // console.log(paginationConfig);
    // const calcPages = paginationConfig.rangePagesShow;
    // return calcPages.map((element: any, index: any) => {
    //   if (element === "...") {
    //     return (
    //       <button key={index} className="buttonPage" disabled>
    //         {element}
    //       </button>
    //     );
    //   } else {
    return (
      <button key={1} onClick={() => changePage(1)}>
        {1}
      </button>
    );
    // }
    // });
  };

  return (
    <div className="productPage">
      <PaginationBox>
        <button
          className="fa fa-angle-double-left buttonPage"
          onClick={() => changePage(1)}
        ></button>
        <button
          className="fa fa-angle-left buttonPage"
          onClick={() => pageCalculator(props.currentPage - 1)}
        ></button>

        {handleNumberPagination()}

        <button
          className="fa fa-angle-right buttonPage"
          onClick={() => pageCalculator(props.currentPage + 1)}
        />
        <button
          className="fa fa-angle-double-right buttonPage"
          onClick={() => changePage(numberPage)}
        />
      </PaginationBox>
    </div>
  );
};

export default Pagination;
