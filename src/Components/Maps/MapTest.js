import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css';
import LocationPin from './LocationPin';





function MapTest ({location, defaultZoom}) {



    return(
        <div className="map">
    {/* <h2 className="map-h2"></h2> */}

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS_API_KEY}}
        defaultCenter={location}
        defaultZoom={defaultZoom}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
    )
}

export default MapTest;

// process.env.MAPS_API_KEY