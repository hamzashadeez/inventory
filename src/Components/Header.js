import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header({click}) {
  return (
    <div className="main__header">
      <div className="logo">
        <h2>
          Medi<span>Care</span>
        </h2>
      </div>

      <ul className="main__links">
        <li>
            <Link to='/'>Dashboard</Link>
        </li>
        <li>
            <Link to='/orders'>Orders</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/customers'>Customers</Link>
        </li>
      </ul>

      <div className='hambuger_menu' onClick={click}>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  );
}

export default Header;
