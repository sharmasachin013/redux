import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductButton from "../components/products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import { setSingleProduct } from "../features/product/productSlice";
import Price from "../components/extra/Price";
function Single() {
  const { id } = useParams();
  const { single, singleSimilarProducts } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSingleProduct(id));
  }, [id]);

  const imgPath = "/images/" + single.id + ".jpg";
  return (
    <div
      id="single"
      className="row justify-content-center align-items-center text-white mx-auto"
    >
      <div className="col-md-6">
        <img
          src={imgPath}
          alt=""
          className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
        />
      </div>
      <div className="col-md-6 text-center text-md-start">
        <h2 className="fs-1 fw-bold">{single.name}</h2>
        <div className="fs-5 mb-2">
          {" "}
          <Price value={single.price} decimals={2} />
        </div>
        <p className="lead">{single.description}</p>
        <ProductButton product={single} />
      </div>
      <Line />
      <h2 className="text-white my-4 text-center">
        Similar Products Like This
      </h2>
      <Products products={singleSimilarProducts} />
    </div>
  );
}

export default Single;
