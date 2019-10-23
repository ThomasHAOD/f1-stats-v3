import React, { Component } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const Nav = ({handleNavChange}) => {

    return (
      <div className="navbar">
        <h1>F1 Stats Console</h1>

        <ToggleButtonGroup toggle className="nav-buttons" vertical name="navbar" >
          <ToggleButton type="radio" name="radio" value="driver" variant="info" onChange={handleNavChange}>
            Driver Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="compare" variant="info" onChange={handleNavChange}>
            Compare Drivers
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="track" variant="info" onChange={handleNavChange}>
            Track Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="constructor" variant="info" onChange={handleNavChange}>
            Constructor Stats
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );

}

export default Nav;
