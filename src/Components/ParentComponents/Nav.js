import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "./Nav.scss";

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
          selected
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
      <br />
      <br />

      <ToggleButtonGroup
        toggle
        className="stats-or-charts"
        name="stats-or-charts"
      >
        <ToggleButton
          type="radio"
          name="radio"
          value="stats"
          variant="warning"
          selected
          onChange={handleStatsShownChange}
        >
          Show Stats
        </ToggleButton>
        <ToggleButton
          type="radio"
          name="radio"
          value="charts"
          variant="warning"
          onChange={handleStatsShownChange}
        >
          Show Charts
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Nav;
