import React, { Component } from "react";
import DriverStatsContainer from "../StatsContainers/DriverStatsContainer";
import DriverChartsContainer from "../ChartContainers/DriverChartsContainer";
import Image from "react-bootstrap/Image";
import DriverSelect from "../../Components/OptionComponents/DriverSelect";
import TrackSelect from "../../Components/OptionComponents/TrackSelect";
import ConstructorSelect from "../../Components/OptionComponents/ConstructorSelect";
import NextRaceData from "../../Components/NextRaceComponents/NextRaceData";
import Spinner from "react-bootstrap/Spinner";
import Countdown from "react-countdown-now";

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
        <DriverChartsContainer
          driverStatsShown={props.driverStatsShown}
          allRaces={props.allRaces}
          seasons={props.seasons}
          tracks={props.tracks}
        />
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
