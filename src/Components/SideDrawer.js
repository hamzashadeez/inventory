import React from "react";
import "./sidedrawer.css";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"
import logo from '../assets/logo.jpeg'

function SideDrawer({ show, click }) {
  const DrawerClass = ["sidedrawer"];

  if (show) {
    DrawerClass.push("show");
  }
  return <div className={DrawerClass.join(" ")}>

    {/* <img alt='' src={logo} style={{position:"absolute", top: 0, left: 0, width:"100%", height:'230px'}} /> */}
      <ul className='link_sideDrawer'>
      <li onClick={click}>
            <HashLink to='/#header'>Home</HashLink>
        </li>
        <li onClick={click}>
            <HashLink to='/#about'>About</HashLink>
        </li>
        <li onClick={click}>
            <HashLink to='/#contact'>Contact</HashLink>
        </li>
        <li onClick={click}>
            <Link to='/customers'>Admin</Link>
        </li>
      </ul>
  </div>;
}

export default SideDrawer;
