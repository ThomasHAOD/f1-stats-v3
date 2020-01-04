import React, { Component } from "react";
import DriverStatsContainer from "../StatsComponents/DriverStatsContainer";
import DriverChartsContainer from "../ChartsComponents/DriverChartsContainer";
import DriverSelect from "../OptionComponents/DriverSelect";
import TrackSelect from "../OptionComponents/TrackSelect";
import ConstructorSelect from "../OptionComponents/ConstructorSelect";
import NextRaceData from "../NextRaceComponents/NextRaceData";
import Spinner from "react-bootstrap/Spinner";
import Countdown from "react-countdown-now";
import DriverMainDetails from "../MainDetailsComponents/DriverMainDetails";

import "./StatsContainer.scss";

const StatsContainer = props => {
  const date = props.nextRace.date;
  const time = props.nextRace.time;
  const dateAndTime = [date, time].join();

  let spinner = null;

  if (props.loadingSpinnerShown) {
    spinner = (
      <Spinner
        animation="border"
        variant="info"
        style={{
          display: props.loadingSpinnerShown,
          position: "absolute",
          top: "50%",
          left: "50%"
        }}
      />
    );
  }

  let nextRaceHeader = null;

  if (props.homeTextShown) {
    nextRaceHeader = (
      <div id="next-race-header" style={{ display: "contents" }}>
        <NextRaceData nextRace={props.nextRace} />
        <h2>Starts in</h2>
        <h2>
          <Countdown date={dateAndTime} />
        </h2>
      </div>
    );
  }

  let chartsContainer = null;

  if (props.chartsShown) {
    chartsContainer = (
      <main className="charts-container">
        {spinner}
        <DriverChartsContainer
          driverStatsShown={props.driverStatsShown}
          allRaces={props.allRaces}
          seasons={props.seasons}
          tracks={props.tracks}
        />

        <h1>Incredible Predication Charts</h1>
      </main>
    );
  }

  let statsContainer = null;

  if (props.statsShown) {
    statsContainer = (
      <main className="stats-container" style={{ display: props.statsShown }}>
        {spinner}
        <DriverStatsContainer
          driverStatsShown={props.driverStatsShown}
          driver1Name={props.driver1Name}
          driver1Number={props.driver1Number}
          driver1Code={props.driver1Code}
          driver1Nationality={props.driver1Nationality}
          allRaces={props.allRaces}
        />

        <h1 id="home-image" style={{ display: props.homeTextShown }}>
          Incredible Predication Stats
        </h1>
      </main>
    );
  }

  return (
    <div className="stats-container">
      <header className="dropdowns">
        {spinner}
        {nextRaceHeader}
      </header>
      <div className="general-info">
        {spinner}

        <h2>Main Details of Race/Driver/Track/Contructor</h2>

        <DriverMainDetails
          driver1Name={props.driver1Name}
          driver1Number={props.driver1Number}
          driver1Code={props.driver1Code}
          driver1Nationality={props.driver1Nationality}
          driverStatsShown={props.driverStatsShown}
        />
      </div>
      {chartsContainer}
      {statsContainer}
    </div>
  );
};

export default StatsContainer;
