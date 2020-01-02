import React from "react";
import DriverCareerStats from "./DriverStatsComponents/DriverCareerStats";
import "./DriverStatsContainer.scss";

const DriverStatsContainer = props => {
  return props.driverStatsShown ? (
    <div>
      <div
        className="stats-sub-container"
        id="driver-stats"
        style={{ display: props.driverStatsShown }}
      >
        <DriverCareerStats
          allRaces={props.allRaces}
          driverCode={props.driver1Code}
        />
      </div>
    </div>
  ) : null;
};

export default DriverStatsContainer;
