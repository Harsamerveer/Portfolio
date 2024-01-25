// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapStyle = {
    position: "absolute",
    height: "750px",
    width: "48%",
    left: "50%",
  };
  return (
    <div>
        <div className="info-map">
          Harsamerveer Singh
          <br />
          <br />
          University of British Columbia <br />
          Kelowna <br />
          Canada
          <br />
    </div>
    
    <MapContainer center={[49.882114, -119.477829]} zoom={13} style={mapStyle}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>

        
    </div>
  );
};

export default MapComponent;
