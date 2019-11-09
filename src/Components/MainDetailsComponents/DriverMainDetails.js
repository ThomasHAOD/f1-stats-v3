import React from "react";

const DriverMainDetails = props => {
  return (
    <div className="main-details" id="driver-main-details">
      <h1>{props.driver1Name}</h1>
      <h1>
        {props.driver1Code}:{props.driver1Number}
      </h1>
      <h2>34</h2>
      <h2>{props.driver1Nationality}</h2>
    </div>
  );
};

export default DriverMainDetails;
