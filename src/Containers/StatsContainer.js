import React, { Component } from 'react'

export default class StatsContainer extends Component {
    render() {
        return (
            <div className="stats-container">
                <header className="dropdowns"> Dropdowns</header>
                <div className="text-stats">Text stats</div>
                <main className="graphs-container"></main>
            </div>
        )
    }
}
