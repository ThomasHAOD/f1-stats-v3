import React, { Component } from "react";
import Nav from "./Nav";
import OptionsContainer from "./OptionsContainer";
import StatsContainer from "./StatsContainer";
import MobileHeader from "./MobileHeader";

export default class StateContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            driverStatsShown: 'none',
            compareStatsShown: 'none',
            trackStatsShown: 'none',
            constructorStatsShown: 'none',
            homeTextShown: 'inline'
        }

        this.handleStatsShownChange = this.handleStatsShownChange.bind(this)
        
    }

    handleStatsShownChange(event){
        if(event.target.value === 'driver'){
            this.setState({
                driverStatsShown: 'flex',
                compareStatsShown: 'none',
                trackStatsShown: 'none',
                constructorStatsShown: 'none',
                homeTextShown:'none'
            })
        } else if (event.target.value === 'compare'){
            this.setState({
                driverStatsShown: 'flex',
                compareStatsShown: 'flex',
                trackStatsShown: 'none',
                constructorStatsShown: 'none',
                homeTextShown:'none'
            })
        } else if (event.target.value === 'track'){
            this.setState({
                driverStatsShown: 'none',
                compareStatsShown: 'none',
                trackStatsShown: 'flex',
                constructorStatsShown: 'none',
                homeTextShown:'none'
            })
        } else if (event.target.value === 'constructor'){
        this.setState({
            driverStatsShown: 'none',
            compareStatsShown: 'none',
            trackStatsShown: 'none',
            constructorStatsShown: 'flex',
            homeTextShown:'none'
        })
        }
    }
    
    
    

  render() {
    return (
      <div className="App">
        <MobileHeader />
        <div className="grid-container">
          <Nav handleStatsShownChange={this.handleStatsShownChange}/>
          <OptionsContainer 
                driverStatsShown={this.state.driverStatsShown}
                compareStatsShown={this.state.compareStatsShown}
                trackStatsShown={this.state.trackStatsShown}
                constructorStatsShown={this.state.constructorStatsShown}
          />
          <StatsContainer 
                driverStatsShown={this.state.driverStatsShown}
                compareStatsShown={this.state.compareStatsShown}
                trackStatsShown={this.state.trackStatsShown}
                constructorStatsShown={this.state.constructorStatsShown}
                homeTextShown={this.state.homeTextShown}
          />
        </div>
      </div>
    );
  }
}
