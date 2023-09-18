import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black text-white p-4 border-b-2 border-orange-400 sticky top-0 pb-10">
      <nav className="flex items-center justify-between gap-5">
        <h1 className="text-3xl font-semibold tracking-wider">Shopify</h1>
        <ul className="flex gap-5 text-xl font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/cart-item">Cart Item : 0</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
