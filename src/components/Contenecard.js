import React from "react";
import "./contentcard.css";
import { FaLocationArrow } from "react-icons/fa";
const Contenecard = (props) => {
  return (
    <div className="content-wrapper">
      <img className="content-image" src={props.item.imageUrl} alt="place" />

      <div className="content">
        <div style={{ margin: "0 0 0.5rem 0" }}>
          <FaLocationArrow style={{ color: "#f55a5a" }} />
          <span style={{ margin: "0 .5rem" }}>{props.item.location}</span>
          <span>
            <a href={props.item.googleMapsUrl}>View on google maps</a>
          </span>
        </div>
        <h1 style={{ margin: "0 0 0.5rem 0" }}>{props.item.title}</h1>
        <h5 style={{ margin: "0 0 0.5rem 0" }}>
          <span>{props.item.startDate}</span> -{" "}
          <span>{props.item.endDate}</span>
        </h5>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default Contenecard;
