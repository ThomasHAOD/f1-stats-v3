import React from 'react'
import MainImage from '../../Components/ImageComponents/MainImage'

const DriverStats = (props) => {
    return (
        <div className="stats-container" id="driver-stats" style={{display: props.driverStatsShown}}>
            <MainImage/>
        </div>
    )
}

export default DriverStats
