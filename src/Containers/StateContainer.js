import React, { Component } from "react";
import Nav from "./Nav";
import OptionsContainer from "./OptionsContainer";
import StatsContainer from "./StatsContainer";
import MobileHeader from "./MobileHeader";

export default class StateContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             navSelected: ''
        }
        this.handleNavChange = this.handleNavChange.bind(this)
    }

    handleNavChange(event){
        this.setState({navSelected: event.target.value})
    }    
    

  render() {
    return (
      <div className="App">
        <MobileHeader />
        <div className="grid-container">
          <Nav handleNavChange={this.handleNavChange}/>
          <OptionsContainer />
          <StatsContainer />
        </div>
      </div>
    );
  }
}
