import React, { Component } from "react";
import Button, { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>F1 Stats</h1>

        <ToggleButtonGroup toggle className="nav-buttons" vertical name="navbar">
          <ToggleButton type="radio" name="radio" defaultChecked value="1" variant="danger">
            Driver Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="2" variant="danger">
            Compare Drivers
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="3" variant="danger">
            Track Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="4" variant="danger">
            Constructor Stats
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}
