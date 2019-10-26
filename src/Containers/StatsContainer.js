import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import DriverSelect from '../Components/OptionComponents/DriverSelect';

 const StatsContainer = props => {

        const trackStatsShown = props.trackStatsShown
        const constructorStatsShown = props.constructorStatsShown
        const homeTextShown = props.homeTextShown

    return (
      <div className="stats-container">
        <header className="dropdowns">
            <DriverSelect 
            driverStatsShown={props.driverStatsShown}
            drivers={props.currentDrivers}
            onDriverSelected={props.onDriverSelected}
            ></DriverSelect>

            <DriverSelect 
            driverStatsShown={props.compareStatsShown}
            drivers={props.currentDrivers}
            onDriverSelected={props.onDriverSelected}
            ></DriverSelect>
          

          <Dropdown style={{display: trackStatsShown}}>
            <Dropdown.Toggle variant="danger" id="track-selector">
              Select Track
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>

          <Dropdown style={{display: constructorStatsShown}}>
            <Dropdown.Toggle variant="danger" id="constructor-selector">
              Select Constructor
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </header>
        <div className="text-stats">
          <div id="home-about" style={{display: homeTextShown}}>
            <h1>F1 Statistics Console</h1>
            <h2>
              Welcome to the Formula 1 Statistics Console. Here you can view
              historical statistics on Drivers, Tracks and Constructors for
              whatever purpose you wish.
            </h2>
          </div>
        </div>
        <main className="graphs-container">
          <Image fluid src="ferrari-leclerc.jpg" id="home-image" style={{display: homeTextShown}}></Image>
        </main>
      </div>
    );
  }


export default StatsContainer;
