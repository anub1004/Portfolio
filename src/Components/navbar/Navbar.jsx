import React, { useState } from "react";
import { links } from "../Data";
import { NavLink } from "react-router";
import { RiCloseLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";
import './navbar.css';
const Navbar = () => {
  const [showmenu,setmenu]=useState(false);
  return (
    <nav className="nav">
      <div className={`${showmenu ? 'nav-menu  showmenu': 'nav-menu' }`
    }>
        <ul className="nav-list grid">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={()=>{
        setmenu(!showmenu)
      }}
                >
                  {icon}
                  <h3 className="nav-name"> {name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <RiCloseLine className="nav-close" onClick={()=>{
        setmenu(!showmenu);
      }}></RiCloseLine>
      </div>
      <div className="nav-toggle" onClick={()=>{
        setmenu(!showmenu);
      }}>
        <RiMenuLine></RiMenuLine>
      </div>
    </nav>
  );
};

export default Navbar;
