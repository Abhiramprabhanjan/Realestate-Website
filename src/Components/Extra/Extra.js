import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Extra.css";
import CountUp from "react-countup";
import {animate, motion} from 'framer-motion'
import { type } from "@testing-library/user-event/dist/type";
export default function Extra() {
  return (
    <section className="extra-wrapper">
      <div className="extra-container flexCenter paddings innerWidth">
        <div className=" flexColStart extra-left">
          <div className="extra-title">
            <div className="blue-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}>
              {" "}
              We have <br /> the best <br /> Property{" "}
            </motion.h1>
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
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
            className="image-container">
            <img src="bgcMain.jpg" alt="Not Loading" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
