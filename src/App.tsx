import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

import Product from './components/product/product';
import Search from './components/search/search';
import Pagination from './components/pagination/pagination';

const App: React.FC = () => {

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [limit, setLimit] = useState(16);
  const [total, setTotal] = useState();
  const [products, setProducts] = useState([]);

  const showProducts = () => {
    if(products.length) {
      return products.map((item, index) => <Product key={index} product={item}/>);
    } else {
      return <p>Nennhum produto encontrado</p>;
    }       
  }

  const handleTextSearch = (filter: string) => {
    setFilter(filter);
    setPage(1);
  }

  const handlerLimit = (value: string) => {
    setPage(1);
    setLimit(+value);
  }

  const handlerPage = (value: string) => {
    setPage(+value);
  }
 
  useEffect(() => {
    const getProducts = () =>{
      return axios.get(process.env.REACT_APP_API_URL+'/product',
        { params: 
          {
            name: filter,
            page: page,
            limit: limit
          }
        }
      );
    }


    getProducts().then(({ data }) => {
      setProducts(data.products);
      setTotal(data.total);
    });
  }, [filter, limit, page]);

  return (
    <div className="App">
      <header>
        <h1 className="siteTitle">mmartan</h1>
        <Search filter={filter} handlePress={(text: string) => handleTextSearch(text)}/>
      </header>
      <div className="titleBox">
        <h2 className="titleSearch"> { filter? filter : 'Lista de produtos'  } </h2>
      </div>
      <article>
          <h3>{total} { products.length<=1? 'PRODUTO ENCONTRADO' : 'PRODUTOS ENCONTRADOS' }</h3>
          { showProducts() }
       
        <div className="pagination">
          <select className="productQuantity" onChange={ e => handlerLimit(e.target.value)}>
            <option value="16"> 16 produtos por páginas</option>
            <option value="32"> 32 produtos por páginas</option>
          </select>
          <Pagination total={total} productQuantity={limit} page={page} handleClick={ (page: number) =>  handlerPage(page.toString())} />
        </div>
      </article>
    </div>
  );
}

export default App;
