import GoogleMaps from "google-map-react";
import React from "react";
//import GoogleMaps from "google-maps-react";
import { Map, Marker } from "google-maps-react";

const targets = [
  { lat: 35.64860429083234, lng: 138.57693376912908 },
  { lat: 35.64760429083234, lng: 138.57493376912908 }
];

export default function Create() {
  //export const GoogleMaps = () => {

  const defaultLatLng = {
    lat: 35.64860429083234,
    lng: 138.57693376912908
  };

  const positionYSK = {
    lat: 35.6486,
    lng: 138.57693
  };
  const positionDokasuga = {
    lat: 35.658687875856664,
    lng: 138.56954332425778
  };
  const positionDCV = {
    lat: 35.66014231235642,
    lng: 138.57494260883726
  };
  return (
    <div style={{ height: "800px", width: "600px" }}>
      <GoogleMaps
        bootstrapURLKeys={{ key: "AIzaSyARN4ZLpzuzwGo2M6PKr2M--juR5zJyrew" }}
        defaultCenter={defaultLatLng}
        defaultZoom={14}
      >
        <Marker position={positionYSK} />
        <Marker position={positionDokasuga} />
        <Marker position={positionDCV} />
      </GoogleMaps>
    </div>
  );
}
