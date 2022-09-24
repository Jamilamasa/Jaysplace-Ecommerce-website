import React from 'react';
import Product from './components/Product';
import data from './data';
function App() {
  return (
    <div className="grid-container">
        <header>
            <div className="container row">
                <div>
                    <a className="logo" href="/">Jays Place</a>
                </div>
                <div>
                    <ul>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/signin">Sign In</a></li>
                    </ul>
                </div>

            </div> 
        </header>
        <main>
            <div className="row center">
              {
                data.products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))
              }
                
            </div>
        </main>
        <footer className="row center">
            <p>Jays Place &copy; 2022, All Rights Reserved</p>
        </footer>
    </div>
  );
}

export default App;
