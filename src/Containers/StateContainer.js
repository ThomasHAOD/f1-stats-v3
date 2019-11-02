import React, { Component } from "react";
import Nav from "./Nav";
import OptionsContainer from "./OptionsContainer";
import StatsContainer from "./StatsContainer";
import MobileHeader from "./MobileHeader";

export default class StateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStats: "home",
      driverStatsShown: "none",
      compareStatsShown: "none",
      trackStatsShown: "none",
      constructorStatsShown: "none",
      homeTextShown: "inline",
      trackOptionsShown: "inline",
      constructorOptionsShown: "inline",
      allRaces: [],
      driver1Name: "",
      driver1Code: "",
      driver1Number: "",
      driver1Nationality: "",
      drivers: [],
      selectedDriver1SeasonsResults: [],
      selectedDriver1TrackResults: [],
      seasons: [],
      tracks: [],
      constructors: []
    };
    this.handleStatsShownChange = this.handleStatsShownChange.bind(this);
    this.onDriverSelected = this.onDriverSelected.bind(this);
  }

  componentDidMount() {
    const driversUrl = "https://ergast.com/api/f1/current/drivers.json";
    fetch(driversUrl)
      .then(res => res.json())
      .then(drivers =>
        this.setState({
          drivers: drivers.MRData.DriverTable.Drivers
        })
      );

    const tracksUrl = "https://ergast.com/api/f1/current/circuits.json";
    fetch(tracksUrl)
      .then(res => res.json())
      .then(drivers =>
        this.setState({
          tracks: drivers.MRData.CircuitTable.Circuits
        })
      );

    const constructorsUrl =
      "http://ergast.com/api/f1/current/constructors.json";
    fetch(constructorsUrl)
      .then(res => res.json())
      .then(drivers =>
        this.setState({
          constructors: drivers.MRData.ConstructorTable.Constructors
        })
      );
  }

  onDriverSelected(event) {
    const driverId = event;
    const driverUrl = `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=1000`;
    fetch(driverUrl)
      .then(res => res.json())
      .then(allRaces => {
        this.setState({
          allRaces: allRaces.MRData.RaceTable.Races,
          driver1Name:
            allRaces.MRData.RaceTable.Races[0].Results[0].Driver.givenName +
            " " +
            allRaces.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
          driver1Code:
            allRaces.MRData.RaceTable.Races[0].Results[0].Driver.code,
          driver1Number:
            allRaces.MRData.RaceTable.Races[0].Results[0].Driver
              .permanentNumber,
          driver1Nationality:
            allRaces.MRData.RaceTable.Races[0].Results[0].Driver.nationality
        });
      })
      .catch(err => console.error);

    const seasonUrl = `https://ergast.com/api/f1/drivers/${driverId}/seasons.json`;
    fetch(seasonUrl)
      .then(res => res.json())
      .then(seasons => {
        this.setState({
          seasons: seasons.MRData.SeasonTable.Seasons
        });
        const promises = seasons.MRData.SeasonTable.Seasons.map(season => {
          return fetch(
            `https://ergast.com/api/f1/${season.season}/drivers/${driverId}/results.json`
          ).then(res => res.json());
        });

        Promise.all(promises).then(results => {
          this.setState({
            selectedDriver1SeasonsResults: results
          });
        });
      });

    const circuitUrl = `https://ergast.com/api/f1/current/circuits.json`;
    fetch(circuitUrl)
      .then(res => res.json())
      .then(circuits => {
        const promises = circuits.MRData.CircuitTable.Circuits.map(circuit => {
          return fetch(
            `https://ergast.com/api/f1/circuits/${circuit.circuitId}/drivers/${driverId}/results.json`
          ).then(res => res.json());
        });

        Promise.all(promises).then(results => {
          this.setState({
            selectedDriver1TrackResults: results
          });
        });
      });
  }

  onTrackSelect(event) {
    const trackId = event.target.value;
    this.setState({ selectedTrack: trackId });
    if (this.state.code1) {
      const driverId = this.state.driver1ID;
      console.log(driverId);
      const url = `https://ergast.com/api/f1/circuits/${trackId}/drivers/${driverId}/results.json`;
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then(results =>
          this.setState({
            selectedDriver1TrackResults: results.MRData.RaceTable.Races
          })
        );
    }

    if (this.state.code2) {
      const driverId = this.state.driver2ID;
      const url = `https://ergast.com/api/f1/circuits/${trackId}/drivers/${driverId}/results.json`;
      fetch(url)
        .then(res => res.json())
        .then(results =>
          this.setState({
            selectedDriver2TrackResults: results.MRData.RaceTable.Races
          })
        );
    }
  }

  handleStatsShownChange(event) {
    if (event.target.value === "driver") {
      this.setState({
        activeStats: "driver",
        driverStatsShown: "flex",
        compareStatsShown: "none",
        trackStatsShown: "none",
        constructorStatsShown: "none",
        homeTextShown: "none",
        trackOptionsShown: "inline",
        constructorOptionsShown: "inline"
      });
    } else if (event.target.value === "compare") {
      this.setState({
        activeStats: "compare",

        driverStatsShown: "flex",
        compareStatsShown: "flex",
        trackStatsShown: "none",
        constructorStatsShown: "none",
        homeTextShown: "none",
        trackOptionsShown: "inline",
        constructorOptionsShown: "inline"
      });
    } else if (event.target.value === "track") {
      this.setState({
        activeStats: "track",

        driverStatsShown: "none",
        compareStatsShown: "none",
        trackStatsShown: "flex",
        constructorStatsShown: "none",
        homeTextShown: "none",
        trackOptionsShown: "none",
        constructorOptionsShown: "inline"
      });
    } else if (event.target.value === "constructor") {
      this.setState({
        activeStats: "constructor",

        driverStatsShown: "none",
        compareStatsShown: "none",
        trackStatsShown: "none",
        constructorStatsShown: "flex",
        homeTextShown: "none",
        trackOptionsShown: "inline",
        constructorOptionsShown: "none"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <MobileHeader />
        <div className="grid-container">
          <Nav handleStatsShownChange={this.handleStatsShownChange} />
          <OptionsContainer
            trackOptionsShown={this.state.trackOptionsShown}
            constructorOptionsShown={this.state.constructorOptionsShown}
            tracks={this.state.tracks}
            onTrackSelected={this.onTrackSelect}
            constructors={this.state.constructors}
            seasons={this.state.seasons}
          />
          <StatsContainer
            driverStatsShown={this.state.driverStatsShown}
            compareStatsShown={this.state.compareStatsShown}
            trackStatsShown={this.state.trackStatsShown}
            constructorStatsShown={this.state.constructorStatsShown}
            homeTextShown={this.state.homeTextShown}
            currentDrivers={this.state.drivers}
            onDriverSelected={this.onDriverSelected}
            tracks={this.state.tracks}
            onTrackSelected={this.onTrackSelect}
            constructors={this.state.constructors}
          />
        </div>
      </div>
    );
  }
}
