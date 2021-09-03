import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './mapMarker';

class CrosswayMap extends Component {
  static defaultProps = {
    center: {
        address: '5454 County Road 126, Celina, TX 75009',
        lat: 33.298101,
        lng: -96.710949
    },
    zoom: 12.3
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.MAPS_API_KEY}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker
            lat={33.298101}
            lng={-96.710949}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default CrosswayMap;