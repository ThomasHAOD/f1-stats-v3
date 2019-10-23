import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import CheckBox from '../Components/OptionComponents/CheckBox'


export default class OptionsContainer extends Component {
  render() {
    return (
      <div className="options-container">
          <br/>
        <h3>Include Retirements</h3><CheckBox/>
        <br/>
        <h3>Include Wet Races</h3><CheckBox/>
        <br/>
        <h3>Include Dry Races</h3><CheckBox/>
        <br/>

        
        
        <DropdownButton id="dropdown-basic-button" title="Select Track Type" variant="info">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Track" variant="info">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Select Constructor" variant="info">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Year" variant="info">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        
        <h3>Comparison Mode</h3><CheckBox/>
      </div>
    );
  }
  
  
}
