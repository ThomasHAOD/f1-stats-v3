import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import CheckBox from "../Components/OptionComponents/CheckBox";
import TrackSelect from '../Components/OptionComponents/TrackSelect';
import ConstructorSelect from '../Components/OptionComponents/ConstructorSelect';

const OptionsContainer = props =>  {
  
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

          <TrackSelect
                            tracks={props.tracks}
                            onTrackSelected={props.onTrackSelect}
                            trackStatsShown={props.trackOptionsShown}
                        />

<ConstructorSelect
          constructorStatsShown={props.constructorOptionsShown}
          constructors={props.constructors}
          />

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


export default OptionsContainer;
