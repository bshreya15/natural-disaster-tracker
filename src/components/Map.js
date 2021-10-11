import GoogleMapReact from 'google-map-react'
require('dotenv').config();

const Map = ({center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact bootstarpURLKeys = {{key:'process.env.React_App_URLKeys'}} defaultCenter={center} defaultZoom={zoom}>
               
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps={
    center: {
        lat:28.7041,
        lng:77.1025
    },
    zoom:6
}

export default Map
