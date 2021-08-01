// @flow

import React, { useState, useEffect } from "react";

import { firebaseApp } from "../firebase";
import { Link } from "react-router-dom";
import "./InfoWindowStyle.css";

import mapstyle from "./mapStyle";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 35.51073,
  lng: -96.4247,
};
const options = {
  styles: mapstyle,
  disableDefaultUI: true,
  zoomControl: true,
};

function MapElement(props): React.Node {
  const mapContainerStyle = {
    width: props.width,
    height: props.height,
  };
  const [Programs, setPrograms] = useState([]);
  useEffect(() => {
    let dataRef = firebaseApp.database().ref();
    dataRef
      .child("1aETM15XL2pq4KFmAc3ExuooFC5dPXMx9__BpNt4eSuU")
      .child("Data")
      .on("value", (snapshot) => {
        var Program = snapshot.val();
        setPrograms(Program);
      });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selected, setSelected] = React.useState(null);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Map";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={props.zoom || 5}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {Programs.map((marker) => (
          <Marker
            key={marker.FirebaseID}
            position={{ lat: marker.Lat, lng: marker.Lng }}
            icon={{
              url: "/destination.svg",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.Lat, lng: selected.Lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h1>{selected.utility}</h1>
              <h2>{selected.program1.name}</h2>
              <p>{selected.program1.desc}</p>
              <Link
                to={{
                  pathname: "/programinfo",
                  state: { selected },
                }}
              >
                Program Info
              </Link>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default MapElement;
