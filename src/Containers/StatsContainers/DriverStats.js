import React from 'react'
import MainImage from '../../Components/ImageComponents/MainImage'
import DriverMainDetails from '../../Components/MainDetailsComponents/DriverMainDetails'

const DriverStats = (props) => {
    return (
        <div className="stats-sub-container" id="driver-stats" style={{display: props.driverStatsShown}}>
            <MainImage/>
            <DriverMainDetails/>
        </div>
    )
}

export default DriverStats
