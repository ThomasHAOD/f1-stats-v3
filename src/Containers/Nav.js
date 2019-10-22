import React, { Component } from "react";
import Button, { ButtonGroup, ToggleButton } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>F1 Stats</h1>

        <ButtonGroup toggle className="mt-3" vertical>
          <ToggleButton type="radio" name="radio" defaultChecked value="1">
            Driver Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="2">
            Compare Drivers
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="3">
            Track Stats
          </ToggleButton>
          <ToggleButton type="radio" name="radio" value="3">
            Constructor Stats
          </ToggleButton>
        </ButtonGroup>
      </div>
    );
  }
}
