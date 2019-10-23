import React, { Component } from "react";
import Nav from "./Nav";
import OptionsContainer from "./OptionsContainer";
import StatsContainer from "./StatsContainer";
import MobileHeader from "./MobileHeader";

export default class StateContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             statsShown: 'home'
        }
        this.handleStatsShownChange = this.handleStatsShownChange.bind(this)
    }

    handleStatsShownChange(event){
        this.setState({statsShown: event.target.value})
        console.log(this.state.statsShown)
    }    
    

  render() {
    return (
      <div className="App">
        <MobileHeader />
        <div className="grid-container">
          <Nav handleStatsShownChange={this.handleStatsShownChange}/>
          <OptionsContainer />
          <StatsContainer />
        </div>
      </div>
    );
  }
}
