import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import { HiChatBubbleBottomCenter } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            soluta dicta ut eum quia hic?
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart details">
                    <span className="pimaryText">Call</span>
                    <span className="secondaryText">067 342 211</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart details">
                    <span className="pimaryText">Chat</span>
                    <span className="secondaryText">067 342 211</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart details">
                    <span className="pimaryText">Book Appointment</span>
                    <span className="secondaryText">457 342 293</span>
                  </div>
                </div>
                <div className="flexCenter button">Book Now</div>
              </div>
              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart details">
                    <span className="pimaryText">Other Queries</span>
                    <span className="secondaryText">519 381 001</span>
                  </div>
                </div>
                <div className="flexCenter button">Ask Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./main4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
