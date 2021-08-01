import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { firebaseApp } from "../firebase";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./SearchBarStyle.css";

function SearchResults(props) {
  var selected;
  const history = useHistory();
  if (!props.results) {
    return null;
  }

  if (!props.results.length || props.results[0].item == null) {
    return <p className="noResults">There are no results for your query.</p>;
  }
  return (
    <div className="searchResults">
      <button
        className="searchButton1"
        onClick={() => {
          selected = props.results[0].item;
          history.push({
            pathname: "/programinfo",
            state: { selected },
          });
        }}
      >
        {props.results[0].item.utility}{" "}
      </button>
      {props.results[1] != null && (
        <button
          className="searchButton2"
          onClick={() => {
            selected = props.results[1].item;
            history.push({
              pathname: "/programinfo",
              state: { selected },
            });
          }}
        >
          {props.results[1].item.utility}{" "}
        </button>
      )}
      {props.results[2] != null && (
        <button
          className="searchButton3"
          onClick={() => {
            selected = props.results[2].item;
            history.push({
              pathname: "/programinfo",
              state: { selected },
            });
          }}
        >
          {props.results[2].item.utility}{" "}
        </button>
      )}
      {props.results[3] != null && (
        <button
          className="searchButton4"
          onClick={() => {
            selected = props.results[3].item;
            history.push({
              pathname: "/programinfo",
              state: { selected },
            });
          }}
        >
          {props.results[3].item.utility}{" "}
        </button>
      )}
      {props.results[4] != null && (
        <button
          className="searchButton5"
          onClick={() => {
            selected = props.results[4].item;
            history.push({
              pathname: "/programinfo",
              state: { selected },
            });
          }}
        >
          {props.results[4].item.utility}{" "}
        </button>
      )}
    </div>
  );
}

function SearchBar() {
  const [searchResults, setSearchResults] = useState(null);
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

  const options = {
    includeScore: false,
    keys: ["utility", "city", "state_abbrv"],
  };

  const fuse = new Fuse(Programs, options);

  const [text, setText] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      const result = fuse.search(text);
      setSearchResults(result);
    }
  };

  const onChange = (evt) => setText(evt.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="formSearch">
        <input
          type="search"
          name="text"
          placeholder="search database..."
          value={text}
          onChange={onChange}
          className="buttonSearch"
        />
      </form>
      <SearchResults results={searchResults} />
    </div>
  );
}

export default SearchBar;
