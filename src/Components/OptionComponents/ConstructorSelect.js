import React from "react";
import Dropdown from "react-bootstrap/Dropdown";


const ConstructorSelect = props => {
  const options = props.constructors.map(constructor => {
    console.log(props.constructors)
    return (
      <Dropdown.Item
        as="button"
        eventKey={constructor.driverId}
        value={constructor.driverId}
        onClick={handleChange}
      >
        {constructor.givenName} {constructor.familyName}
      </Dropdown.Item>
    );
  });

  function handleChange(event) {
    props.onConstructorSelected(event.target.value, props.number);
  }

  return (
    <Dropdown style={{display: props.constructorStatsShown}}>
      <Dropdown.Toggle variant="danger" id="constructor-selector" >
        Select Driver
      </Dropdown.Toggle>

      <Dropdown.Menu>{options}</Dropdown.Menu>
    </Dropdown>
  );
};

export default ConstructorSelect;
