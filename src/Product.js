import React from "react";

// class Product extends React.Component {
//     render() {
//         return (
//             <div>
//              Name: {this.props.inventory.name} - Price: {this.props.inventory.price}
//             </div>
//         );
//     }
// }

function Product(props) {
  return (
  <div>
      Name: {props.inventory.name} - Price: {props.inventory.price}
  </div>
  );
}

export default Product;