import React, { Component } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const Nav = ({ handleStatsShownChange }) => {
  return (
    <div className="navbar">
      <h1>F1 Stats Console</h1>

      <ToggleButtonGroup toggle className="nav-buttons" vertical name="navbar">
        <ToggleButton
          type="radio"
          name="radio"
          value="home"
          variant="info"
          onChange={handleStatsShownChange}
        >
          Next Race
        </ToggleButton>
        <ToggleButton
          type="radio"
          name="radio"
          value="driver"
          variant="info"
          onChange={handleStatsShownChange}
        >
          Driver Stats
        </ToggleButton>
        {/* <ToggleButton type="radio" name="radio" value="compare" variant="info" onChange={handleStatsShownChange}>
            Compare Drivers
          </ToggleButton> */}
        <ToggleButton
          type="radio"
          name="radio"
          value="track"
          variant="info"
          onChange={handleStatsShownChange}
        >
          Track Stats
        </ToggleButton>
        <ToggleButton
          type="radio"
          name="radio"
          value="constructor"
          variant="info"
          onChange={handleStatsShownChange}
        >
          Constructor Stats
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Nav;
