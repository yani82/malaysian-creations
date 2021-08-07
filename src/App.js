import logo from './logo.svg';
import './App.css';
import React from "react"; 
import Product from "./Product"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Malaysian Creations!
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <Product />
      </header>
    </div>
  );
}

export default App;
