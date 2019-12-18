import React from "react";
import DriverMainDetails from "../MainDetailsComponents/DriverMainDetails";
import DriverCareerStats from "./DriverStatsComponents/DriverCareerStats";
import "./DriverStatsContainer.scss";

const DriverStatsContainer = props => {
  return (
    <div>
      <div
        className="stats-sub-container"
        id="driver-stats"
        style={{ display: props.driverStatsShown }}
      >
        <DriverMainDetails
          driver1Name={props.driver1Name}
          driver1Number={props.driver1Number}
          driver1Code={props.driver1Code}
          driver1Nationality={props.driver1Nationality}
        />
        <DriverCareerStats allRaces={props.allRaces} />
      </div>
    </div>
  );
};

export default DriverStatsContainer;
