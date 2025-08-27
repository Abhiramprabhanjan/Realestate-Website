import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { slideSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="r-container innerWidth paddings">
        <div className="r-head flexColStart">
          <span className="orangeText" style={{ fontSize: "1.5rem" }}>
            The Best property
          </span>
          <span className="primaryText">Luxry Residencies </span>
        </div>

        <Swiper {...slideSettings}>
        <SliderButtons  />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flexColStart">
                <img src={card.image} alt="" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper=useSwiper();
  return (
    <div className="r-button flexCenter">
      <button onClick={()=> swiper.slidePrev()} >{"<"}</button>
      <button onClick={()=> swiper.slideNext()} >{">"}</button>
    </div>
  );
};
