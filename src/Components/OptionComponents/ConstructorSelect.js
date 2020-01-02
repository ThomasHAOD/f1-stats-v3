import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ConstructorSelect = props => {
  const options = props.constructors.map(constructor => {
    return (
      <Dropdown.Item
        as="button"
        eventKey={constructor.constructorId}
        value={constructor.constructorId}
        onClick={handleChange}
      >
        {constructor.name}
      </Dropdown.Item>
    );
  });

  function handleChange(event) {
    props.onConstructorSelect(event);
  }

  let constructorSelect = null;

  if (props.constructorStatsShown) {
    constructorSelect = (
      <Dropdown style={{ display: props.constructorStatsShown }}>
        <Dropdown.Toggle variant="warning" id="constructor-selector">
          Select Constructor
        </Dropdown.Toggle>

        <Dropdown.Menu>{options}</Dropdown.Menu>
      </Dropdown>
    );
  }

  return { constructorSelect };
};

export default ConstructorSelect;
