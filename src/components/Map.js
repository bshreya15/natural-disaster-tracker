import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

require("dotenv").config();

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstarpURLKeys={{ key: "process.env.React_App_URLKeys" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
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
