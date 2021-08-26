import "./estimationForm.css";
import React, { useState, useEffect } from "react";
import LoadingIcons from "react-loading-icons";

function EstimationForm() {
  var poverty = null;
  var coverage = null;
  var isLoading = 5;
  var water = 5;
  var timeLine = "Mon";
  const [submitState, setSubmitState] = useState(0);
  const [displayResult, setDisplayResult] = useState(0);
  const handleSelectionPoverty = (event) => {
    poverty = event.target.value;
  };
  const handleSelectionCoverage = (event) => {
    coverage = event.target.value;
  };
  const handleSelectionWater = (event) => {
    water = event.target.value;
  };
  const handleSelectionTime = (event) => {
    timeLine = event.target.value;
  };
  const handleSubmit = () => {
    if (poverty == null || coverage == null) {
      alert("Please select all options");
    } else {
      setSubmitState(1);
      setTimeout(() => {
        setSubmitState(0);
        setDisplayResult(1);
      }, 5000);
    }
  };

  return (
    <div className="estimationDiv">
      <div>
        <p>This is text explaining how this all works and functions.</p>
      </div>
      <div
        className="RadioButtonContainer"
        onChange={(event) => handleSelectionPoverty(event)}
      >
        <div>
          <input type="radio" value="100" id="100" name="Poverty" />
          <label for="100">100% of federal poverty rate</label>
        </div>
        <div>
          <input type="radio" value="150" id="150" name="Poverty" />
          <label for="150">150% of federal poverty rate</label>
        </div>
        <div>
          <input type="radio" value="200" id="200" name="Poverty" />
          <label for="200">200% of federal poverty rate</label>
        </div>
      </div>
      <div className="box">
        <select onChange={(event) => handleSelectionWater(event)}>
          <option value="5">4,500 gallons monthly is deemed essential</option>
          <option value="7">5,500 gallons monthly is deemed essential</option>
          <option value="10">7,500 gallons monthly is deemed essential</option>
        </select>
      </div>

      <div
        className="RadioButtonContainer"
        onChange={(event) => handleSelectionCoverage(event)}
      >
        <div>
          <input type="radio" value="25" id="25" name="Coverage" />
          <label for="25">25% of essential usage</label>
        </div>
        <div>
          <input type="radio" value="50" id="50" name="Coverage" />
          <label for="50">50% of essential usage</label>
        </div>
        <div>
          <input type="radio" value="75" id="75" name="Coverage" />
          <label for="75">75% of essential usage</label>
        </div>
        <div>
          <input type="radio" value="100" id="100c" name="Coverage" />
          <label for="100c">100% of essential usage</label>
        </div>
      </div>

      <div className="box">
        <select onChange={(event) => handleSelectionTime(event)}>
          <option value="Mon">Monthly</option>
          <option value="Year">Annually</option>
        </select>
      </div>
      <div>
        <button className="buttonSubmit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
      {submitState > 0 && (
        <div>
          <LoadingIcons.BallTriangle fill="#06bcee" />
        </div>
      )}
      {displayResult > 0 && (
        <div>
          <p>100,000,000</p>
        </div>
      )}
    </div>
  );
}

export default EstimationForm;
