import React from "react"
import GoogleMapReact from "google-map-react"
export default function Simplemap(){

    const defaultProps = {
        center: {
          lat: 11.127123,
          lng: 78.656891
        },
        zoom: 7
      };
return(
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Child
          lat={12.9009877}
          lng={80.22793009999998
          }
          text="Your location"
        />
      </GoogleMapReact>
    </div>
)
}

function Child({text}){
    return(
        <div style={{
            color: 'white', 
            background: 'red',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
          }}>
            {text}
            </div>
    )
}