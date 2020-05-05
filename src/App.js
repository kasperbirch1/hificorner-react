import React from 'react';
import { Router } from "@reach/router";
import Home from './pages/Home'
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Blog path="/blog" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
