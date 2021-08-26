import React from "react";

export default function CategoryList(props) {
    const categoryElements = props.categories.map((category, i) => (
        <p key={i}>{category}</p>
    ));
    return <div>{categoryElements}</div>;
}