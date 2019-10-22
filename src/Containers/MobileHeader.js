import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class MobileHeader extends Component {
    render() {
        return (
            <header className="icon-container">
                <Button variant="info">Nav</Button>
                <Button variant="info">Options</Button>
            </header>
        )
    }
}
