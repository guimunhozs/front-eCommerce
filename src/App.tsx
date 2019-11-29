import React from 'react';
import './App.css';

import Product from './components/product/product';

const images = [
  'https://www.laroya.com.br/media/catalog/product/cache/1/image/540x540/9df78eab33525d08d6e5fb8d27136e95/l/e/lencol-avulso-berco-americano-papi-2915_9.jpg',
  'https://a-static.mlcdn.com.br/618x463/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-estamparia/casadasogra/27-38-08verdeclaro/98d8675f6db171cdc884cfdc4a59bc63.jpg',
  'https://www.romanceenxovais.com.br/octopus/design/images/92/products/b/avulso%20prata.jpg',
  'https://casadasograenxovais.fbitsstatic.net/img/p/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-68907/266232-3.jpg?w=500&h=500&v=no-change'
];

const product = {
    images,
    name: 'Kit de cama 210 fios',
    category: 'Classic 1 - Solteiro Extra',
    price: 298.00,
    discount: 10
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 className="siteTitle">mmartan</h1>
        <div className="searchSection">
          <i id="iconSearch" className="fa fa-search iconSearch"></i>
          <input className="inputSearch" type="text" placeholder="Lençol avulso" />
          <button id="iconCancel" className="fa fa-times-circle iconSearch" />
        </div>
      </header>
      <div className="titleBox">
        <h2 className="titleSearch">Lençol avulso</h2>
      </div>
      <article>
          <h3>200 PRODUTOS ENCONTRADOS</h3>
          <Product product={product}/>
       
        <div className="pagination">
          <select className="productQuantity">
            <option value="16"> 16 produtos por páginas</option>
            <option value="32"> 32 produtos por páginas</option>
            <option value="50"> 50 produtos por páginas</option>
          </select>

          <div className="productPage">
            <p>
              <a>|&lt; </a>
              <a>&lt;</a>

              <a>1</a>
              <a>2</a>
              <a>3</a>
              <a>4</a>

              <a>&gt;</a>
              <a>&gt;|</a>
            </p>
          </div>
        </div>

      </article>
    </div>
  );
}

export default App;
