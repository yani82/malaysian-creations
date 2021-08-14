import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react"; 
import Product from "./Product"; 

const inventories = [
  { name: "Batik sarong", price: "$80" },
  { name: "Wau (traditional kite)", price: "$50" },
  { name: "Painting", price: "$100" },
  { name: "Beaded necklace", price: "$30" },
  { name: "Beaded scarf", price: "$60" },
  { name: "Batik drawstring bag", price: "$25" },
];

class App extends React.Component {

  // property initializer 
  state = {
    name: 'Batik sarong'
  }

  render() {

    console.log(this.state) 

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
