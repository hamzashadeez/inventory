import React from "react";
import "./sidedrawer.css";
import { Link } from "react-router-dom";

function SideDrawer({ show, click }) {
  const DrawerClass = ["sidedrawer"];

  if (show) {
    DrawerClass.push("show");
  }
  return <div className={DrawerClass.join(" ")}>
      <ul className='link_sideDrawer'>
      <li onClick={click}>
            <Link to='/'>Dashboard</Link>
        </li>
        <li onClick={click}>
            <Link to='/orders'>Orders</Link>
        </li>
        <li onClick={click}>
            <Link to='/products'>Products</Link>
        </li>
        <li onClick={click}>
            <Link to='/customers'>Customers</Link>
        </li>
      </ul>
  </div>;
}

export default SideDrawer;
