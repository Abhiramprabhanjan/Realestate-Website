import React, { useState } from "react";
// import logo from 'logo.png'
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import OutSideClickHandler from 'react-outside-click-handler'

export default function Header() {

  const [menuOpened,setmenuOpened]=useState(false);
  const getMenuStyles=(menuOpened)=>{
    if(window.innerWidth<=800)
    {
      return {right: menuOpened ? '0' :'-100%'};
    }
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="logo2.jpg" alt="Network issue" width={100} height={100} />
        <OutSideClickHandler  onOutsideClick={()=>{ setmenuOpened(false)}}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">About Us</a>
            <a href="">Get Started</a>
            <a href="">Recidencies</a>
            <button className="button">Contact </button>
          </div>
        </OutSideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setmenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}
