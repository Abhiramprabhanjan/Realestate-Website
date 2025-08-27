import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Extra.css";
import CountUp from "react-countup";
export default function Extra() {
  return (
    <section className="extra-wrapper">
      <div className="extra-container flexCenter paddings innerWidth">
        <div className=" flexColStart extra-left">
          <div className="extra-title">
            <div className="blue-circle"></div>
            <h1>
              {" "}
              We have <br /> the best <br /> Property{" "}
            </h1>
          </div>

          <div className="extra-desc  flexColStart secondaryText">
            <span> Find the property that is suitable for you</span>

            <span>Find everything you need with ease</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="blue" size={25}></HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Properties</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={200} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers!!</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={20} end={35} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className="extra-right flexCenter">
          <div className="image-container">
            <img src="bgcMain.jpg" alt="Not Loading" />
          </div>
        </div>
      </div>
    </section>
  );
}
