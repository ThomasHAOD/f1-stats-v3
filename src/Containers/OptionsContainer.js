import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import CheckBox from "../Components/OptionComponents/CheckBox";

class OptionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
      const trackOptionsShown = this.props.trackOptionsShown
      const constructorOptionsShown = this.props.constructorOptionsShown
    return (
      <div className="options-container">
        <h3>Include Retirements</h3>
        <CheckBox />
        <br />
        <h3>Include Wet Races</h3>
        <CheckBox />
        <br />
        <h3>Include Dry Races</h3>
        <CheckBox />
        <br />

        <ButtonGroup vertical>
          <DropdownButton
            className="options-dropdown"
            id="dropdown-basic-button"
            title="Select Track Type"
            variant="info"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="options-dropdown"
            id="dropdown-basic-button"
            title="Select Track"
            variant="info"
            style={{display: trackOptionsShown}}
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="options-dropdown"
            id="dropdown-basic-button"
            title="Select Constructor"
            variant="info"
            style={{display: constructorOptionsShown}}
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="options-dropdown"
            id="dropdown-basic-button"
            title="Select Year"
            variant="info"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <h3>Comparison Mode</h3>
        <CheckBox />
      </div>
    );
  }
}

export default OptionsContainer;
