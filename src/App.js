// import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react"; 
// import Product from "./Product"; 
import Item from "./components/Item"; 
import ProductList from "./components/ProductList"; 

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
    inventories: [
      { name: "Batik sarong", price: "$80" },
      { name: "Wau (traditional kite)", price: "$50" },
      { name: "Painting", price: "$100" },
      { name: "Beaded necklace", price: "$30" },
      { name: "Beaded scarf", price: "$60" },
      { name: "Batik drawstring bag", price: "$25" },
    ],
    category: "Handicrafts", 
  };

  handleClick = () => {
    console.log('button was clicked');
    this.setState({category: "Textiles"});
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('form was submitted');
  };

  render() {

    // const inventoryElements = this.state.inventories.map((inventory) => {
    // return <Product key={inventory.name} inventory={inventory} />
    // });
    return (
    <div>
        <Item category={this.state.category} />
        <ProductList inventories={this.state.inventories} />
        <button onClick={this.handClick}>Click</button>
        {/* <form onSubmit={this.handleSubmit}>
          <button type='submit'>Submit</button>
        </form> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Welcome to Malaysian Creations {this.state.inventory.name}!</p>
        <p>New collection of {this.state.inventories.name}</p>
        {inventoryElements} */}
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
