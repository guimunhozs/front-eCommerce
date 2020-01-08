import React, { useState, useEffect } from "react";
import {
  Header,
  PrincipalTitle,
  BoxTitle,
  SearchTitle,
  Article,
  ListTitle,
  PaginationFooter,
  LimitProductPage
} from "./home.css";
import axios from "axios";

import Product from "./../product/product";
import Search from "./../search/search";
import Pagination from "./../pagination/pagination";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(16);
  const [total, setTotal] = useState();
  const [products, setProducts] = useState([]);

  const showProducts = () => {
    if (products.length) {
      return products.map((item, index) => (
        <Product key={index} product={item} />
      ));
    } else {
      return <p>Nennhum produto encontrado</p>;
    }
  };

  const handleTextSearch = (filter: string) => {
    setFilter(filter);
    setPage(1);
  };

  const handlerLimit = (value: number) => {
    setPage(1);
    setLimit(value);
  };

  const handlerPage = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const getProducts = () => {
      return axios.get(process.env.REACT_APP_API_URL + "/product", {
        params: {
          name: filter,
          page: page,
          limit: limit
        }
      });
    };

    getProducts().then(({ data }) => {
      setProducts(data.products);
      setTotal(data.total);
    });
  }, [filter, limit, page]);

  return (
    <div>
      <Header>
        <PrincipalTitle>mmartan</PrincipalTitle>
        <Search
          filter={filter}
          handlePress={(text: string) => handleTextSearch(text)}
        />
      </Header>
      <BoxTitle>
        <SearchTitle>{filter || "Lista de produtos"}</SearchTitle>
      </BoxTitle>
      <Article>
        <ListTitle>
          {total}
          {products.length <= 1
            ? " produto encontrado"
            : " produtos encontrados"}
        </ListTitle>

        {showProducts()}

        <PaginationFooter>
          <LimitProductPage onChange={e => handlerLimit(+e.target.value)}>
            <option value="16"> 16 produtos por páginas</option>
            <option value="32"> 32 produtos por páginas</option>
          </LimitProductPage>
          <Pagination
            numberProducts={total}
            limitProductPage={limit}
            currentPage={page}
            handleClick={(page: number) => handlerPage(page)}
          />
        </PaginationFooter>
      </Article>
    </div>
  );
};

export default Home;
