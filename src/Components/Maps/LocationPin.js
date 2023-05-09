import React, {useState} from 'react';
import {ImLocation2} from 'react-icons/im';
import './Map.css';
import MapInfo from './MapInfo';

function LocationPin() {

const [shown, setShown] = useState(false)

    return(
    <div className="pin" onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}>
    <ImLocation2 className="pin-icon" />
    <p className="pin-text">{'Park Theater'}</p>
    {shown && <MapInfo />}
  </div>

    )
}

export default LocationPin