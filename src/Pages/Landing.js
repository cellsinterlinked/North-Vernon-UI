import React from 'react'
import MapTest from '../Components/Maps/MapTest';
import LandingVideo from '../Components/VIsuals/LandingVideo';
import Event from '../Components/Updates/Event';
import GetInvolved from '../Components/Updates/GetInvolved';

function Landing () {

    const location = {
        address: '25 N Madison Ave, North Vernon, IN 47265, United States',
        lat: 39.005970 ,
        lng: -85.624280
    }

    return(
        <>
       
        {/* <MapTest location={location} defaultZoom={18}/> */}
        <LandingVideo />
        <Event />
        <GetInvolved />
        </>
    )
}

export default Landing;