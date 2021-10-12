// @flow

import React, { useState, useEffect } from "react";

import { firebaseApp } from "../firebase";
import { Link } from "react-router-dom";
import "./InfoWindowStyle.css";

import mapstyle from "./mapStyle.js";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];

//centered to the US 48 continous states
const center = {
  lat: 35.51073,
  lng: -96.4247,
};
const options = {
  styles: mapstyle,
  disableDefaultUI: true,
  zoomControl: true,
};

function MapElement(props) {
  const mapContainerStyle = {
    width: props.width,
    height: props.height,
  };
  //This parse the data from firebase for each utility the first tag is id of data set (auto generated)
  const [Utilities, setUtilitiess] = useState([]);
  useEffect(() => {
    let dataRef = firebaseApp.database().ref();
    dataRef
      .child("1aETM15XL2pq4KFmAc3ExuooFC5dPXMx9__BpNt4eSuU")
      .child("Data")
      .on("value", (snapshot) => {
        var Utility = snapshot.val();
        setUtilitiess(Utility);
      });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  //To prevent rerendering the map data is saved unless data changes
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
        {Utilities.map((marker) => (
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
              localStorage.removeItem(selected);
            }}
          >
            <div>
              <h1>{selected.utility}</h1>
              {selected.programNum === 1 && (
                <div>
                  <h2>This Utility has one customer assistance program.</h2>
                  <Link
                    to={{
                      pathname: "/programinfo",
                      state: { selected },
                    }}
                  >
                    Click here for info on this program
                  </Link>
                </div>
              )}
              {selected.programNum > 1 && (
                <div>
                  <h2>
                    This Utility has {selected.programNum} customer assistance
                    programs.
                  </h2>
                  <Link
                    to={{
                      pathname: "/programinfo",
                      state: { selected },
                    }}
                  >
                    Click here for info on these programs
                  </Link>
                </div>
              )}
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default MapElement;
