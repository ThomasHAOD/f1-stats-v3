import React from 'react';
import './App.scss';
import Nav from './Containers/Nav';
import OptionsContainer from './Containers/OptionsContainer';
import StatsContainer from './Containers/StatsContainer';

function App() {
	return (
		<div className="App">
			<Nav/>
			<OptionsContainer/>
			<StatsContainer/>
		</div>
	);
}

export default App;
