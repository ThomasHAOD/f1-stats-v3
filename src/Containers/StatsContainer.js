import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default class StatsContainer extends Component {
  render() {
    return (
      <div className="stats-container">
        <header className="dropdowns">
          <h1>Dropdowns</h1>
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            variant="info"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            variant="info"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </header>
        <div className="text-stats">
          <h1>Text stats</h1>
        </div>
        <main className="graphs-container">
          <h1>Graphs go here</h1>
        </main>
      </div>
    );
  }
}
