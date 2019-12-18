import React from "react";
import MainImage from "../ImageComponents/MainImage";
import DriverMainDetails from "../MainDetailsComponents/DriverMainDetails";
import DriverCareerStats from "../StatsTableComponents/DriverCareerStats";

const DriverStatsContainer = props => {
  return (
    <div>
      <div
        className="stats-sub-container"
        id="driver-stats"
        style={{ display: props.driverStatsShown }}
      >
        <MainImage />
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
