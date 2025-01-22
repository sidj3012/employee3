import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "./location.ico",
  iconSize: [38, 38],
});

const Map = ({ employees }) => {
  return (
    <MapContainer center={[20, 78]} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {employees.map((employee) => (
        <Marker
          key={employee._id}
          position={[employee.location.lat, employee.location.lon]}
          icon={customIcon}
        >
          <Popup>
            <strong>{employee.name}</strong>
            <br />
            Position: {employee.position}
            <br />
            City: {employee.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
