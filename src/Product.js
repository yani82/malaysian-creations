import React from "react";

// class Product extends React.Component {
//     render() {gi
//         return (
//             <div>
//              Name: {this.props.inventory.name} - Price: {this.props.inventory.price}
//             </div>
//         );
//     }
// }

function Product(props) {
  return (
    <>
        <div>Name: {props.inventory.name}</div>
        <div>Price: {props.inventory.price}</div>
    </>
  );
}

export default Product;