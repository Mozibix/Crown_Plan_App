import React from "react";
import serviceInfo from "./../userdata";
import "./Services.css";

const Services = () => {
  const serviceDetails = serviceInfo.map((serviceData) => {
    return <ServiceFlex {...serviceData} />;
  });
  return (
    <>
      <section className="services">
        <h2>Services</h2>

        <div className="service-grid">{serviceDetails}</div>
      </section>
    </>
  );
};

const ServiceFlex = (props) => {
  return (
    <>
      <div className="flex-box">
        <div className="icon">
          <img src={props.icon} alt="icon" />
        </div>

        <div className="service-details">
          <h6>{props.header}</h6>
          <p className="service-quotes"> {props.quotes}</p>
        </div>
      </div>
    </>
  );
};

export default Services;
