import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react"; 
import Product from "./Product"; 

const inventories = [
  { Product name: "Batik sarong", price: "$80" },
  { Product name: "Wau (traditional kite)", price: "$50" },
  { Product name: "Painting", price: "$100" },
  { Product name: "Beaded necklace", price: "$30" },
  { Product name: "Beaded scarf", price: "$60" },
  { Product name: "Batik drawstring bag", price: "$25" },
];

class App extends React.Component {
  render() {
    const inventoryElements = inventories.map((inventory) => (
      <Product inventory={inventory} />
    ));
    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Welcome to Malaysian Creations!</p>
        {inventoryElements}
      </header>
    </div>
    );
  }
}


// function App() {
// const inventoryElements = inventories.map((inventory) => (
//   <Product inventory={inventory} />
// ));

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>Welcome to Malaysian Creations!</p>
//         {inventoryElements}
//       </header>
//     </div>
//   );
// }

export default App;
