import React from "react";
import FinishingPie from "../../Components/ChartsComponents/DriverChartComponents/FinishingPie";
import GridPie from "../../Components/ChartsComponents/DriverChartComponents/GridPie";
import SeasonsStats from "../../Components/ChartsComponents/DriverChartComponents/SeasonsStats";
import TrackResultsBySeason from "../../Components/ChartsComponents/DriverChartComponents/TrackResultsBySeason";
import TrackStats from "../../Components/ChartsComponents/DriverChartComponents/TrackStats";

const DriverChartsContainer = props => {
  return (
    <div
      className="charts-container"
      style={{ display: props.driverStatsShown }}
    >
      <FinishingPie />
      <GridPie />
      <SeasonsStats />
      <TrackResultsBySeason />
      <TrackStats />
    </div>
  );
};

export default DriverChartsContainer;
