import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./ProductsList.module.css";

const ProductList = () => {
  const dataProducts = useSelector((state:any) => state.allProducts.products);
  const renderList = dataProducts.map((product:any) => {
    const { id, name, description } = product;
    return (
      <div className={`${styles.product}`} key={id}>
        <Link to={`/products/${id}`}>
          <div className={`ui link card ${styles.card}`}>
            <div className={`content ${styles.content}`}>
              <div className={`header ${styles.header}`}>{name}</div>
              <div className={`description ${styles.description}`}>{description}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className={`ui grid container ${styles.container}`}>{renderList}</div>;
};

export default ProductList;