import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const TrackSelect = props => {
  const options = props.tracks.map((track, index) => {
    return (
      <Dropdown.Item
        as="button"
        eventKey={index}
        value={track.circuitId}
        onClick={handleChange}
      >
        {track.Location.country}: {track.circuitName}
      </Dropdown.Item>
    );
  });

  function handleChange(event) {
    props.onTrackSelected(event);
  }

  return (
    <Dropdown style={{ display: props.trackStatsShown }} className="dropdown">
      <Dropdown.Toggle variant="success" id="track-selector">
        Select Track
      </Dropdown.Toggle>

      <Dropdown.Menu>{options}</Dropdown.Menu>
    </Dropdown>
  );
};

export default TrackSelect;
