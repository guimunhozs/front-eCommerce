import React from 'react';
import './App.css';

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
          <div className="produtBox">
            <div className="imageBox">
              <img src="https://www.laroya.com.br/media/catalog/product/cache/1/image/540x540/9df78eab33525d08d6e5fb8d27136e95/l/e/lencol-avulso-berco-americano-papi-2915_9.jpg" alt="foto 4"></img>
              <img src="https://a-static.mlcdn.com.br/618x463/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-estamparia/casadasogra/27-38-08verdeclaro/98d8675f6db171cdc884cfdc4a59bc63.jpg" alt="foto 1"></img>
              <img src="https://www.romanceenxovais.com.br/octopus/design/images/92/products/b/avulso%20prata.jpg" alt="foto 2"></img>
              <img src="https://casadasograenxovais.fbitsstatic.net/img/p/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-68907/266232-3.jpg?w=500&h=500&v=no-change" alt="foto 3"></img>
            </div>
            <div className="productInfo">
              <div className="productBoxText">
                <h4 className="productName">Kit de cama 210 fios</h4>
                <p className="producType">Classic 1 - Solteiro Extra</p>
              </div>
              <p className="productPrices"><span className="priceDiscount">R$98,00</span> <span>por</span> R$298,00</p>
            </div>
          </div>

          <div className="produtBox">
            <div className="imageBox">
              <img src="https://www.laroya.com.br/media/catalog/product/cache/1/image/540x540/9df78eab33525d08d6e5fb8d27136e95/l/e/lencol-avulso-berco-americano-papi-2915_9.jpg" alt="foto 4"></img>
              <img src="https://a-static.mlcdn.com.br/618x463/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-estamparia/casadasogra/27-38-08verdeclaro/98d8675f6db171cdc884cfdc4a59bc63.jpg" alt="foto 1"></img>
              <img src="https://www.romanceenxovais.com.br/octopus/design/images/92/products/b/avulso%20prata.jpg" alt="foto 2"></img>
              <img src="https://casadasograenxovais.fbitsstatic.net/img/p/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-68907/266232-3.jpg?w=500&h=500&v=no-change" alt="foto 3"></img>
            </div>
            <div className="productInfo">
              <div className="productBoxText">
                <h4 className="productName">Kit de cama 210 fios</h4>
                <p className="producType">Classic 1 - Solteiro Extra</p>
              </div>
              <p className="productPrices"><span className="priceDiscount">R$98,00</span> <span>por</span> R$298,00</p>
            </div>
          </div>

          <div className="produtBox">
            <div className="imageBox">
              <img src="https://www.laroya.com.br/media/catalog/product/cache/1/image/540x540/9df78eab33525d08d6e5fb8d27136e95/l/e/lencol-avulso-berco-americano-papi-2915_9.jpg" alt="foto 4"></img>
              <img src="https://a-static.mlcdn.com.br/618x463/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-estamparia/casadasogra/27-38-08verdeclaro/98d8675f6db171cdc884cfdc4a59bc63.jpg" alt="foto 1"></img>
              <img src="https://www.romanceenxovais.com.br/octopus/design/images/92/products/b/avulso%20prata.jpg" alt="foto 2"></img>
              <img src="https://casadasograenxovais.fbitsstatic.net/img/p/lencol-avulso-casal-100-algodao-200-fios-sem-elastico-premium-68907/266232-3.jpg?w=500&h=500&v=no-change" alt="foto 3"></img>
            </div>
            <div className="productInfo">
              <div className="productBoxText">
                <h4 className="productName">Kit de cama 210 fios</h4>
                <p className="producType">Classic 1 - Solteiro Extra</p>
              </div>
              <p className="productPrices"><span> <del>R$98,00</del> por</span> R$298,00</p>
            </div>
          </div>
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
