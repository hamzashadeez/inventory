import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link"

function Header({click}) {
  localStorage.getItem("admin")
  return (
    <div className=" fixed-top navbar main__header shadow-sm">
      <div className="logo">
        <h2>
        Idris Imam <span>Ventures</span>
        </h2>
      </div>

      <ul className="main__links">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <HashLink to='/#about'>About</HashLink>
        </li>
        <li>
            <HashLink to="/#contact"
            
           >Contact</HashLink>
        </li>
        <li>
            <Link to='/login'>Admin</Link>
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
