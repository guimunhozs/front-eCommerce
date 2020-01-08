import React, { useState, useEffect } from "react";

import {
  PaginationBox,
  ButtonPage,
  ButtonPageSelected
} from "./pagination.css";

import { pagination } from "./../../libs/calculatePages";

type props = {
  limitProductPage: number;
  numberProducts: number;
  currentPage: number;
  handleClick: Function;
};

const Pagination = (props: props) => {
  const [numberMaxPage, setNumberMaxPage] = useState(0);
  const [paginationConfig, setPaginationConfig] = useState({
    hasDotBefore: false,
    hasDotAfter: false,
    rangePagesShow: [] as number[]
  });

  useEffect(() => {
    setNumberMaxPage(
      Math.ceil(props.numberProducts / props.limitProductPage) || 0
    );
    setPaginationConfig(pagination(props.currentPage, numberMaxPage));
  }, [
    props.numberProducts,
    props.currentPage,
    props.limitProductPage,
    numberMaxPage
  ]);

  const changePage = (page: number) => {
    props.handleClick(
      page >= 1 && page <= numberMaxPage ? page : props.currentPage
    );
  };

  const handleNumberPagination = () => {
    return paginationConfig.rangePagesShow.map(element => {
      if (element === props.currentPage) {
        return (
          <ButtonPageSelected key={element} disabled>
            {element}
          </ButtonPageSelected>
        );
      } else {
        return (
          <ButtonPage key={element} onClick={() => changePage(element)}>
            {element}
          </ButtonPage>
        );
      }
    });
  };

  const needDots = (hasDots: boolean) => {
    return hasDots ? <ButtonPage>...</ButtonPage> : "";
  };

  return (
    <div>
      <PaginationBox>
        <ButtonPage
          className="fa fa-angle-double-left"
          onClick={() => changePage(1)}
        />
        <ButtonPage
          className="fa fa-angle-left"
          onClick={() => changePage(props.currentPage - 1)}
        />
        {needDots(paginationConfig.hasDotBefore)}
        {handleNumberPagination()}
        {needDots(paginationConfig.hasDotAfter)}
        <ButtonPage
          className="fa fa-angle-right"
          onClick={() => changePage(props.currentPage + 1)}
        />
        <ButtonPage
          className="fa fa-angle-double-right"
          onClick={() => changePage(numberMaxPage)}
        />
      </PaginationBox>
    </div>
  );
};

export default Pagination;
