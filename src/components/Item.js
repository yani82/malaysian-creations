import React from "react";

export default function Item(props) {
    console.log(props);
    return <div>{props.category}</div>;
}
  