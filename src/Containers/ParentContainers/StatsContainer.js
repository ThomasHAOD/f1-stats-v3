import React, { Component } from "react";
import DriverStatsContainer from "../StatsContainers/DriverStatsContainer";
import DriverChartsContainer from "../ChartContainers/DriverChartsContainer";
import Image from "react-bootstrap/Image";
import DriverSelect from "../../Components/OptionComponents/DriverSelect";
import TrackSelect from "../../Components/OptionComponents/TrackSelect";
import ConstructorSelect from "../../Components/OptionComponents/ConstructorSelect";
import Spinner from "react-bootstrap/Spinner";

const StatsContainer = props => {
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
      <div className="text-stats">
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
        <div id="home-about" style={{ display: props.homeTextShown }}>
          <h1>F1 Statistics Console</h1>
          <h2>
            Welcome to the Formula 1 Statistics Console. Here you can view
            historical statistics on Drivers, Tracks and Constructors for
            whatever purpose you wish.
          </h2>
        </div>
      </div>
      <main className="graphs-container">
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
        <DriverChartsContainer driverStatsShown={props.driverStatsShown} />
        <Image
          fluid
          src="ferrari-leclerc.jpg"
          id="home-image"
          style={{ display: props.homeTextShown }}
        ></Image>
      </main>
    </div>
  );
};

export default StatsContainer;
