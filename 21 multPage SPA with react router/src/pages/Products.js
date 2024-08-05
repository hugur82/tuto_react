import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "1", title: "Laptop" },
  { id: "2", title: "Smartphone" },
  { id: "3", title: "Headphones" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
