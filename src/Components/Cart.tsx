import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart);

  useEffect(() => {
    // dispatch(add(products));
  }, []);

  interface IProductId {
    productId: number;
  }

  function handleRemove(productId: number) {
    dispatch(remove(productId));
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-3xl font-semibold text-center p-4">Cart</h1>
      <div className="max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4">
          {products.map((product, index) => {
            const { image, title, description, price, id } = product;
            console.log("received-data", product);
            return (
              <div
                className="border-2 border-white p-2 rounded-lg"
                key={index + new Date().toLocaleString()}
              >
                <img className="w-full h-44" src={image} alt="image..." />
                <h1>{title}</h1>
                <p>{description}</p>
                <h1>{price}</h1>
                <button
                  onClick={() => handleRemove(id)}
                  className="bg-pink-400 text-white px-4 py-2 font-semibold rounded-lg"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
