import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DriverSelect = props => {
  const options = props.drivers.map(driver => {
    return (
      <Dropdown.Item
        as="button"
        eventKey={driver.driverId}
        value={driver.driverId}
        onClick={handleChange}
      >
        {driver.givenName} {driver.familyName}
      </Dropdown.Item>
    );
  });

  function handleChange(event) {
    props.onDriverSelected(event.target.value, props.number);
  }

  let driverSelect = null;

  if (props.driverStatsShown) {
    driverSelect = (
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="danger" id="driver-selector">
          Select Driver
        </Dropdown.Toggle>

        <Dropdown.Menu>{options}</Dropdown.Menu>
      </Dropdown>
    );
  }

  return { driverSelect };
};

export default DriverSelect;
