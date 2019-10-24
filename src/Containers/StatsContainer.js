import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

export default class StatsContainer extends Component {

    
    

  render() {
    return (
      <div className="stats-container">
        <header className="dropdowns">
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="driver-selector">
              Select Driver
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="driver-selector">
              Select Driver
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="track-selector">
              Select Track
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="constructor-selector">
              Select Constructor
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </header>
        <div className="text-stats">
          <div id="home-about">
            <h1>F1 Statistics Console</h1>
            <h2>
              Welcome to the Formula 1 Statistics Console. Here you can view
              historical statistics on Drivers, Tracks and Constructors for
              whatever purpose you wish.
            </h2>
          </div>
        </div>
        <main className="graphs-container">
          <Image fluid src="ferrari-leclerc.jpg" id="home-image"></Image>
        </main>
      </div>
    );
  }
}
