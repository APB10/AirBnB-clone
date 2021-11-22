import React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import { Result } from 'postcss';

function Map({ searchResults }) {
  
    // transform search result object into the 
    // { latidude: 52.516277, longitude: 13.352322 } 
    // object 
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    //   The latidude and longitude of the center of the locations coordinaties 
    const center = getCenter(coordinates);

    const [viewport, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return <ReactMapGL
        mapStyle="mapbox://styles/aalloo10/ckwav2r4s0w6l15qougmrz78d"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
        {searchResults.map(result => (
            <div key={result.long}>
                <Marker
                longitude={result.long}
                latitude={result.lat}
                offsetLeft={-20}
                offsetTop={-10}
                >
                    
                </Marker>
            </div>
        ))}
    </ReactMapGL>
}

export default Map;
