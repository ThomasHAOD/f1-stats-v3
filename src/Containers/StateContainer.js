import React, { Component } from "react";
import Nav from "./Nav";
import OptionsContainer from "./OptionsContainer";
import StatsContainer from "./StatsContainer";
import MobileHeader from "./MobileHeader";

export default class StateContainer extends Component {
  render() {
    return (
      <div className="App">
        <MobileHeader />
        <div className="grid-container">
          <Nav />
          <OptionsContainer />
          <StatsContainer />
        </div>
      </div>
    );
  }
}
