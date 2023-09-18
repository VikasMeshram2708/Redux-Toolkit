import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      console.log(json);
      setProducts(json);
    };
    fetchData();
  }, []);

  function handleAdd(product: IProducts) {
    dispatch(add(product));
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-purple-400 text-3xl mb-5 font-semibold text-center">
          Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product: IProducts) => {
            const { image, id, title, price, description } = product;
            return (
              <div key={id} className="border-2 border-white p-4">
                <img src={image} className="w-full h-44" alt="" />
                <h1 className="text-xl mt-2 font-semibold">{title}</h1>
                <p className="text-sm mt-1">{description}</p>
                <h1 className="text-xl font-bold text-red-400 mt-2">
                  $ {price}
                </h1>
                <button
                  onClick={() => {
                    handleAdd(product);
                  }}
                  className="bg-pink-400 text-white font-semibold text-lg px-4 py-2 mt-2 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
