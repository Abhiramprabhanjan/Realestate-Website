import React,{useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
const Value = () => {
  const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side elements */}
        <div className="v-left">
          <div className="image-container">
            <img src="./main3.jpg" alt="Network Issue" />
          </div>
        </div>
        {/* right side elements */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText ">Value we give to you</span>
          <span className="secondaryText">
            We always help you in finding the best property <br /> Best service
            is you can get from us related to finding the best property and the
            most luxurious property
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {data.map((item, i) => {
              
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton flexCenter">
                      <AccordionItemState>
                        {
                          ({expanded})=> expanded? setClassName("expanded"):setClassName('collapsed')
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon ">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel ><p className="secondaryText">{item.detail}</p></AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
