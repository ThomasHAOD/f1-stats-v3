import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import CheckBox from "../../Components/OptionComponents/CheckBox";
import TrackSelect from "../../Components/OptionComponents/TrackSelect";
import ConstructorSelect from "../../Components/OptionComponents/ConstructorSelect";
import SeasonSelect from "../../Components/OptionComponents/SeasonSelect";
import Nav from "./Nav";

const OptionsContainer = props => {
  return (
    <div className="options-container">
      <Nav handleStatsShownChange={props.handleStatsShownChange} />
      <h3>Include Retirements</h3>
      <CheckBox handleChange={props.handleIncludeRetirements} />
      <br />
      <h3>Include Wet Races</h3>
      <CheckBox />
      <br />
      <h3>Include Dry Races</h3>
      <CheckBox />
      <br />

      <ButtonGroup vertical>
        <TrackSelect
          tracks={props.tracks}
          onTrackSelected={props.onTrackSelect}
          trackStatsShown={props.trackOptionsShown}
        />

        {/* <ConstructorSelect
          constructorStatsShown={props.constructorOptionsShown}
          constructors={props.constructors}
        />
        <SeasonSelect seasons={props.seasons} /> */}
      </ButtonGroup>

      {/* <h3>Comparison Mode</h3>
      <CheckBox /> */}
    </div>
  );
};

export default OptionsContainer;
