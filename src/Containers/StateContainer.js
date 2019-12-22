import React, { Component } from "react";
import OptionsContainer from "../Components/ParentComponents/OptionsContainer";
import StatsContainer from "../Components/ParentComponents/StatsContainer";
import MobileHeader from "./MobileHeader";
import "./StateContainer.scss";

export default class StateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStats: "home",
      driverStatsShown: "none",
      compareStatsShown: "none",
      trackStatsShown: "none",
      constructorStatsShown: "none",
      loadingSpinnerShown: "none",
      homeTextShown: "contents",
      trackOptionsShown: "inline",
      constructorOptionsShown: "inline",
      statsShown: "flex",
      chartsShown: "none",
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
      selectedTrackResults: [],
      constructors: [],
      includeRetirements: true,
      includeWetRaces: true,
      includeDryRaces: true,
      nextRace: {}
    };
    this.handleStatsShownChange = this.handleStatsShownChange.bind(this);
    this.onDriverSelected = this.onDriverSelected.bind(this);
    this.handleIncludeRetirements = this.handleIncludeRetirements.bind(this);
    this.handleIncludeWetRaces = this.handleIncludeWetRaces.bind(this);
    this.handleIncludeDryRaces = this.handleIncludeDryRaces.bind(this);
    this.handleStatsOrCharts = this.handleStatsOrCharts.bind(this);
    this.onTrackWithDriverSelect = this.onTrackWithDriverSelect.bind(this);
    this.onTrackSelect = this.onTrackSelect.bind(this);
  }

  componentDidMount() {
    this.setState({ loadingSpinnerShown: "flex", homeTextShown: "none" });

    const driversUrl = "https://ergast.com/api/f1/current/drivers.json";
    fetch(driversUrl)
      .then(res => res.json())
      .then(drivers =>
        this.setState({
          drivers: drivers.MRData.DriverTable.Drivers,
          loadingSpinnerShown: "none",
          homeTextShown: "contents"
        })
      );

    const tracksUrl = "https://ergast.com/api/f1/current/circuits.json";
    fetch(tracksUrl)
      .then(res => res.json())
      .then(tracks =>
        this.setState({
          tracks: tracks.MRData.CircuitTable.Circuits
        })
      );

    const constructorsUrl =
      "http://ergast.com/api/f1/current/constructors.json";
    fetch(constructorsUrl)
      .then(res => res.json())
      .then(constructors =>
        this.setState({
          constructors: constructors.MRData.ConstructorTable.Constructors
        })
      );

    const nextRaceUrl = "https://ergast.com/api/f1/current/next.json";
    fetch(nextRaceUrl)
      .then(res => res.json())
      .then(nextRace =>
        this.setState({
          nextRace: nextRace.MRData.RaceTable.Races[0]
        })
      );
  }

  onDriverSelected(event) {
    this.setState({ loadingSpinnerShown: "flex", driverStatsShown: "none" });
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
            selectedDriver1TrackResults: results,
            loadingSpinnerShown: "none",
            driverStatsShown: "flex"
          });
        });
      });
  }

  onTrackSelect(event) {
    const trackId = event.target.value;
    this.setState({ selectedTrack: trackId });
    const url = `https://ergast.com/api/f1/circuits/${trackId}/results.json?limit=1000`;
    fetch(url)
      .then(res => res.json())
      .then(results => {
        console.log(results);
        this.setState({ selectedTrackResults: results.MRData.RaceTable.Races });
      });
  }

  onTrackWithDriverSelect(event) {
    const trackId = event.target.value;
    this.setState({ selectedTrack: trackId });
    if (this.state.code1) {
      const driverId = this.state.driver1ID;
      const url = `https://ergast.com/api/f1/circuits/${trackId}/drivers/${driverId}/results.json`;
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

  handleIncludeRetirements() {
    const newIncludeRetirements = !this.state.includeRetirements;
    this.setState({
      includeRetirements: newIncludeRetirements
    });
  }

  handleIncludeWetRaces() {
    const newIncludeWetRaces = !this.state.includeWetRaces;
    this.setState({
      includeWetRaces: newIncludeWetRaces
    });
  }

  handleIncludeDryRaces() {
    const newIncludeDryRaces = !this.state.includeDryRaces;
    this.setState({
      includeDryRaces: newIncludeDryRaces
    });
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
    } else if (event.target.value === "home") {
      this.setState({
        activeStats: "home",
        driverStatsShown: "none",
        compareStatsShown: "none",
        trackStatsShown: "none",
        constructorStatsShown: "none",
        homeTextShown: "contents",
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

  handleStatsOrCharts(event) {
    if (event.target.value === "stats") {
      this.setState({ statsShown: "flex", chartsShown: "none" });
    } else if (event.target.value === "charts") {
      this.setState({ statsShown: "none", chartsShown: "flex" });
    }
  }

  render() {
    return (
      <div className="App">
        <MobileHeader />
        <div className="grid-container">
          <OptionsContainer
            handleStatsShownChange={this.handleStatsShownChange}
            trackOptionsShown={this.state.trackOptionsShown}
            constructorOptionsShown={this.state.constructorOptionsShown}
            tracks={this.state.tracks}
            onTrackSelected={this.onTrackSelect}
            constructors={this.state.constructors}
            seasons={this.state.seasons}
            handleIncludeRetirements={this.handleIncludeRetirements}
            handleIncludeWetRaces={this.handleIncludeWetRaces}
            handleIncludeDryRaces={this.handleIncludeDryRaces}
            handleStatsOrCharts={this.handleStatsOrCharts}
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
            driver1Code={this.state.driver1Code}
            driver1Name={this.state.driver1Name}
            driver1Number={this.state.driver1Number}
            driver1Nationality={this.state.driver1Nationality}
            allRaces={this.state.allRaces}
            seasons={this.state.seasons}
            loadingSpinnerShown={this.state.loadingSpinnerShown}
            nextRace={this.state.nextRace}
            statsShown={this.state.statsShown}
            chartsShown={this.state.chartsShown}
          />
        </div>
      </div>
    );
  }
}
