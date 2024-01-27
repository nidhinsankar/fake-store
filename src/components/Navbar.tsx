import { Link } from "react-router-dom";
import React from "react";
const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
