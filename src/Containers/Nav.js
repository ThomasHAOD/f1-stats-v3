import React, { Component } from "react";
import Button, { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>F1 Stats</h1>

        <ToggleButtonGroup toggle className="nav-buttons" vertical name="navbar">
          <ToggleButton type="radio" name="radio" defaultChecked value="1" variant="success">
            Driver Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="2" variant="success">
            Compare Drivers
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="3" variant="success">
            Track Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="4" variant="success">
            Constructor Stats
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}
