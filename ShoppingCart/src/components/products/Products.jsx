import React from "react";
import Product from "./product";

function products(props) {
  const { products } = props;
  console.log(products);
  return (
    <div className="px-lg-5 text-dark">
      <div className="row row-cols-1 row-col-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4 justify-content-start">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default products;
