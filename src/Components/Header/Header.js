import React from "react";
// import logo from 'logo.png'
import './Header.css';
export default function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img  src="logo2.jpg" alt="Network issue" width={100} height={100} />
        <div className="h-menu flexCenter">
            
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">About Us</a>
          <a href="">Get Started</a>
          <a href="">Recidencies</a>
          <button className="button">Contact </button>
        </div>
      </div>
    </section>
  );
}
