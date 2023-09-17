import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">
        Welcome to the Redux Toolkit
      </h2>

      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
