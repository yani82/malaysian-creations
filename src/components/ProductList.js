import React from "react";
import Product from "./Product";

export default function ProductList(props) {
    const inventoryElements = props.inventories.map((inventory) => (
  <Product inventory={inventory} />
));
    return (
        <div>
            {inventoryElements}
        </div>
    )
}
