import React, { Component } from "react";
import Button, { ButtonGroup, ToggleButton } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ButtonGroup toggle className="mt-3">
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
