import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CheckBox from "../OptionComponents/CheckBox";
import DriverSelect from "../OptionComponents/DriverSelect";
import TrackSelect from "../OptionComponents/TrackSelect";
import ConstructorSelect from "../OptionComponents/ConstructorSelect";
import SeasonSelect from "../OptionComponents/SeasonSelect";
import Nav from "./Nav";
import "./OptionsContainer.scss";

const OptionsContainer = props => {
  return (
    <div className="options-container">
      <Nav
        handleStatsShownChange={props.handleStatsShownChange}
        handleStatsOrCharts={props.handleStatsOrCharts}
      />

      <ButtonGroup vertical>
        <DriverSelect
          drivers={props.currentDrivers}
          onDriverSelected={props.onDriverSelected}
        />

        <TrackSelect
          tracks={props.tracks}
          onTrackSelected={props.onTrackSelected}
        />

        <ConstructorSelect
          constructors={props.constructors}
          onConstructorSelect={props.onConstructorSelect}
        />
        <SeasonSelect
          seasons={props.seasons}
          onSeasonSelect={props.onSeasonSelect}
        />
      </ButtonGroup>

      <h3>Include Retirements</h3>
      <CheckBox handleChange={props.handleIncludeRetirements} />
      <br />
      <h3>Include Wet Races</h3>
      <CheckBox handleChange={props.handleIncludeWetRaces} />
      <br />
      <h3>Include Dry Races</h3>
      <CheckBox handleChange={props.handleIncludeDryRaces} />
      <br />

      <h3>Comparison Mode</h3>
      <CheckBox />
      <br />
      <br />
      <p id="credit">
        By Thomas O'Donnell -{" "}
        <a href="https://dnbsoftware.com" target="_blank">
          dnbsoftware.com
        </a>
      </p>
    </div>
  );
};

export default OptionsContainer;
