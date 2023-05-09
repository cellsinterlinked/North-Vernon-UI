import React from 'react'
import './MapInfo.css';
import ParkTheater from '../../Assets/park theater.jpg';

function MapInfo() {
    return(
        <div className="mapInfo_container">
            
        <div className="map-banner_container">
            <img alt="" src={ParkTheater}></img>
        </div>
        <div className="map-info_container">
            <h1>Park Theater</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
            
        </div>
    )
}

export default MapInfo;