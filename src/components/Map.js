import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
require("dotenv").config();

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}

          onClick={() => setLocationInfo({id: ev.id, title: ev.title}) }

        />
      
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstarpURLKeys={{ key: "process.env.React_App_URLKeys" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 28.7041,
    lng: 77.1025,
  },
  zoom: 6,
};

export default Map;
