import React, { Component } from 'react'
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class MobileHeader extends Component {
    render() {
        return (
            <ToggleButtonGroup className="icon-container" name="mobile-nav-options">
                <ToggleButton variant="info">Nav</ToggleButton>
                <ToggleButton variant="info">Options</ToggleButton>
            </ToggleButtonGroup>
        )
    }
}
