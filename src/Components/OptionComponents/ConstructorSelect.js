import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ConstructorSelect = props => {
  const options = props.constructors.map(constructor => {
    return (
      <Dropdown.Item
        as="button"
        eventKey={constructor.constructorId}
        key={constructor.constructorId}
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

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="constructor-selector">
        Select Constructor
      </Dropdown.Toggle>

      <Dropdown.Menu>{options}</Dropdown.Menu>
    </Dropdown>
  );
};

export default ConstructorSelect;
