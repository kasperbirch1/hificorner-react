import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import { Router } from "@reach/router";
import Home from './pages/Home'
import Blog from './pages/Blog';
import Product from './pages/Product';
import About from './pages/About';
import Categories from './pages/Categories';
import Shop from './pages/Shop';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Home path="/" />
        <Categories path="categories" />
        <Shop path="shop/:slug" />
        <Shop path="shop" />
        <Blog path="blog" />
        <Product path="product/:sku" />
        <About path="about" />
      </Router>
    </GlobalProvider>
  );
}

export default App;
