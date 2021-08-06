import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/fsantiago/cks0pkyve2oaq17n6dlieu47d"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result, idx) => (
        <div key={idx}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={result.lat}
                longitude={result.long}
              >
                  {result.title}
              </Popup>
          ): (
              false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
