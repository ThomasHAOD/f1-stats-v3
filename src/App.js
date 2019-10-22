import React from "react";
import "./App.scss";
import Nav from "./Containers/Nav";
import OptionsContainer from "./Containers/OptionsContainer";
import StatsContainer from "./Containers/StatsContainer";
import MobileHeader from "./Containers/MobileHeader";

function App() {
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

export default App;
