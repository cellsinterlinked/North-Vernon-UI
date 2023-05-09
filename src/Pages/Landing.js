import React from 'react'
import MapTest from '../Components/Maps/MapTest';

function Landing () {

    const location = {
        address: '25 N Madison Ave, North Vernon, IN 47265, United States',
        lat: 39.005970 ,
        lng: -85.624280
    }

    return(
        <>
        <div>This is landing page</div>
        <MapTest location={location} defaultZoom={18}/>
        </>
    )
}

export default Landing;