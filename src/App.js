import React from 'react';
import './App.scss';
import Nav from './Containers/Nav';
import OptionsContainer from './Containers/OptionsContainer';
import StatsContainer from './Containers/StatsContainer';
import MobileHeader from './Containers/MobileHeader';

function App() {
	return (
		<div className="App">
			<MobileHeader/>
			<Nav/>
			<OptionsContainer/>
			<StatsContainer/>
		</div>
	);
}

export default App;
