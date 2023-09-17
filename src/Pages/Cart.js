import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  function handleRemove(productId) {
    return dispatch(remove(productId));
  }
  return (
    <div className="bg-black text-purple-500  min-h-screen">
      <h1 className="text-center text-3xl font-semibold py-10">Cart</h1>

      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="border-2 border-white p-4 rounded-lg"
            >
              <img src={product.image} className="h-56 w-full" />
              <h1>{product.title}</h1>
              <p>{product.price}</p>
              <button
                onClick={() => {
                  handleRemove(product.id);
                }}
                className="bg-pink-400 px-4 py-2 rounded-lg text-white font-semibold"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
