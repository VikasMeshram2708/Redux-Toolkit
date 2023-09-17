import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const items = useSelector((state) => state.cart); // which model do you want to subscribe

  return (
    <div className="bg-slate-800 text-white p-5 sticky top-0">
      <ul className="flex items-center justify-between">
        <h1>
          <Link to={"/"}>Redux Toolkit</Link>
        </h1>
        <div className="flex gap-5">
          <li>
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="cartCount" to="/cart">
              Cart Items :{items.length}
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
