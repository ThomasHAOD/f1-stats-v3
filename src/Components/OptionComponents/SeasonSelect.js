import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const SeasonSelect = props => {
  const options = props.seasons.map(season => {
    return (
      <Dropdown.Item
        as="button"
        eventKey={season.season}
        value={season.season}
        onClick={handleChange}
      >
        {season.season}
      </Dropdown.Item>
    );
  });

  function handleChange(event) {
    props.onSeasonSelected(event.target.value);
  }

  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle variant="light" id="season-selector">
        Select Season
      </Dropdown.Toggle>

      <Dropdown.Menu>{options}</Dropdown.Menu>
    </Dropdown>
  );
};

export default SeasonSelect;
