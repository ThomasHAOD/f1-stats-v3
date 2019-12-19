import React from "react";
import "./MainDetails.css";

const DriverMainDetails = props => {
  if (props.driver1Code) {
    return (
      <div
        className="main-details"
        id="driver-main-details"
        style={{ display: props.driverStatsShown }}
      >
        <div style={{ display: "inline" }}>
          <h1>{props.driver1Name}</h1>

          <h1>
            {props.driver1Code}:{props.driver1Number}
          </h1>

          <h2>34</h2>

          <h2>{props.driver1Nationality}</h2>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DriverMainDetails;
