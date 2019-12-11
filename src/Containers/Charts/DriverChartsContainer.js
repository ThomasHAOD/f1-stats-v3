import React from "react";
import FinishingPie from "./ChartsComponents/DriverChartComponents/FinishingPie";
import GridPie from "./ChartsComponents/DriverChartComponents/GridPie";
import SeasonsStats from "./ChartsComponents/DriverChartComponents/SeasonsStats";
import TrackResultsBySeason from "./ChartsComponents/DriverChartComponents/TrackResultsBySeason";
import TrackStats from "./ChartsComponents/DriverChartComponents/TrackStats";

const DriverChartsContainer = props => {
  return (
    <div
      className="charts-container"
      style={{ display: props.driverStatsShown }}
    >
      <FinishingPie allRaces={props.allRaces} />
      <GridPie allRaces={props.allRaces} />
      {/* <SeasonsStats allRaces={props.allRaces} seasons={props.seasons} /> */}

      {/* <TrackStats allRaces={props.allRaces} tracks={props.tracks} /> */}
    </div>
  );
};

export default DriverChartsContainer;
