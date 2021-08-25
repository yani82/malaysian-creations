import React from "react";
import Product from "./Product";

export default function ProductList(props) {
    const inventoryElements = props.inventories.map((inventory, i) => (
        <Product key={i} inventory={inventory} />
    ));
    return <div>{inventoryElements}</div>;
}
