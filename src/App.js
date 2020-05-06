import React from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home'
import Blog from './pages/Blog';
import About from './pages/About';
import Categories from './pages/Categories';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Categories path="/categories" />
        <Shop path="/shop" />
        <Blog path="/blog" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
