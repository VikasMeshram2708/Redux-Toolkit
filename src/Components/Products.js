import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productsSlice";

import { STATUSES } from "../store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);
  //   const [products, setProducts] = useState([]);

  //   console.log("received-data", products);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const json = await response.json();
    //   console.log(json);
    //   setProducts(json);
    // };
    // fetchProducts();
  }, []);

  function handleAdd(product) {
    // push into the store
    dispatch(add(product));
  }

  if (status === STATUSES.LOADING) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (status === STATUSES.ERROR) {
    return <h1 className="text-center">Something went wrong...</h1>;
  }
  return (
    <div className="bg-black text-purple-500 min-h-screen">
      <div
        className="grid grid-cols-3 items-center
       gap-5 "
      >
        {products.map((product) => {
          return (
            <div className="border-2 border-white p-4" key={product.id}>
              <img className="w-full h-80" src={product.image} alt="image" />
              44
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p className="text-red-400">$ {product.price}</p>
              <button
                onClick={() => {
                  handleAdd(product);
                }}
                className="bg-pink-400 px-4 py-2 rounded-lg text-white font-semibold"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
