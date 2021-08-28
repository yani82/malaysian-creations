// import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react"; 
import Prices from "./components/Prices"; 
import ProductList from "./components/ProductList"; 
import CategoryList from "./components/CategoryList";



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
    currentUser: {username: "Yani"},
    inventories: [
      { name: "Batik sarong", price: "$80" },
      { name: "Wau (traditional kite)", price: "$50" },
      { name: "Painting", price: "$100" },
      { name: "Beaded necklace", price: "$30" },
      { name: "Beaded scarf", price: "$60" },
      { name: "Batik drawstring bag", price: "$25" },
    ],
    categories: ["Handicrafts", "Textiles", "Jewellery"], 
    view: "inventories", 
  };

  handleClick = () => {
    console.log('button was clicked');
    this.setState({category: "Textiles"});
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('form was submitted');
  };

  changeView = (newView) => {
    this.setState({view: newView})
  }

  render() {

    // const inventoryElements = this.state.inventories.map((inventory) => {
    // return <Product key={inventory.name} inventory={inventory} />
    // });
    return (
    <div>
      <nav>
        <li 
          onClick={() => this.changeView("inventories")} 
          style={{ cursor: "pointer" }}
          >
            Item List
        </li>
        <li 
          onClick={() => this.changeView("categories")} 
          style={{ cursor: "pointer" }}
          >
            Categories List
        </li>
        <li 
          onClick={() => this.changeView("prices")} 
          style={{ cursor: "pointer" }}
          >
            Price List
        </li>
      </nav>
      {this.state.view === "inventories" && (
        <ProductList inventories={this.state.inventories} /> 
      )}
      {this.state.view === "categories" && (
        <CategoryList categories={this.state.categories} /> 
      )}
      {this.state.view === "prices" && (
        <Prices user={this.state.currentUser} /> 
      )}
        {/* <Item category={this.state.category} />
        <ProductList inventories={this.state.inventories} />
        <button onClick={this.handClick}>Click</button> */}
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
