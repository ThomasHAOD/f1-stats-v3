import React, { Component } from "react";
import DriverStatsContainer from "../StatsComponents/DriverStatsContainer";
import DriverChartsContainer from "../ChartsComponents/DriverChartsContainer";
import DriverSelect from "../OptionComponents/DriverSelect";
import TrackSelect from "../OptionComponents/TrackSelect";
import ConstructorSelect from "../OptionComponents/ConstructorSelect";
import NextRaceData from "../NextRaceComponents/NextRaceData";
import Spinner from "react-bootstrap/Spinner";
import Countdown from "react-countdown-now";
import "./StatsContainer.scss";

const StatsContainer = props => {
  const date = props.nextRace.date;
  const time = props.nextRace.time;
  const dateAndTime = [date, time].join();
  return (
    <div className="stats-container">
      <header className="dropdowns">
        <Spinner
          animation="border"
          variant="info"
          style={{
            display: props.loadingSpinnerShown,
            position: "absolute",
            left: "50%"
          }}
        />
        <div id="next-race-header" style={{ display: props.homeTextShown }}>
          <NextRaceData nextRace={props.nextRace} />
          <h2>Starts in</h2>
          <h2>
            <Countdown date={dateAndTime} />
          </h2>
        </div>
        <DriverSelect
          driverStatsShown={props.driverStatsShown}
          drivers={props.currentDrivers}
          onDriverSelected={props.onDriverSelected}
        />

        <DriverSelect
          driverStatsShown={props.compareStatsShown}
          drivers={props.currentDrivers}
          onDriverSelected={props.onDriverSelected}
        />

        <TrackSelect
          tracks={props.tracks}
          onTrackSelected={props.onTrackSelect}
          trackStatsShown={props.trackStatsShown}
        />

        <ConstructorSelect
          constructorStatsShown={props.constructorStatsShown}
          constructors={props.constructors}
        />
      </header>
      <div className="general-info">
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
        <DriverStatsContainer
          driverStatsShown={props.driverStatsShown}
          driver1Name={props.driver1Name}
          driver1Number={props.driver1Number}
          driver1Code={props.driver1Code}
          driver1Nationality={props.driver1Nationality}
          allRaces={props.allRaces}
        />
        <h2 style={{ display: props.homeTextShown }}>
          Amazing Prediction Stats
        </h2>
      </div>
      <main className="graphs-container" style={{ display: "none" }}>
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
        <DriverChartsContainer
          driverStatsShown={props.driverStatsShown}
          allRaces={props.allRaces}
          seasons={props.seasons}
          tracks={props.tracks}
        />

        <h1 id="home-image" style={{ display: props.homeTextShown }}>
          Incredible Predication Charts
        </h1>
      </main>
      <main className="stats-container" style={{ display: "flex" }}>
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
        <DriverChartsContainer
          driverStatsShown={props.driverStatsShown}
          allRaces={props.allRaces}
          seasons={props.seasons}
          tracks={props.tracks}
        />

        <h1 id="home-image" style={{ display: props.homeTextShown }}>
          Incredible Predication Stats
        </h1>
      </main>
    </div>
  );
};

export default StatsContainer;
