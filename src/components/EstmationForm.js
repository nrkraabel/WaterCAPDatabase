import "./estimationForm.css";
import React, { useState } from "react";
import LoadingIcons from "react-loading-icons";
import SiteWrapper from "../SiteWrapper.react";
import SEO from "../components/SEO";
// Ui elements from material-core documentation at https://mui.com/components/
import {
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Button,
} from "@material-ui/core";
import StyledRadio from "./StylizedRadioButton";

function EstimationForm() {
  const [poverty, setPoverty] = useState(null);
  const [coverage, setCoverage] = useState(null);
  const [fixedCharge, setFixedCharge] = useState(true);
  const [water, setWater] = useState(null);
  const [takeUpRate, setTakeUpRate] = useState(null);
  const [timeFrame, setTimeFrame] = useState(1);
  const [submitState, setSubmitState] = useState(0);
  const [displayResult, setDisplayResult] = useState(0);

  //Selection handlers
  const handleSelectionPoverty = (event) => {
    setPoverty(event.target.value);
  };
  const handleSelectionCoverage = (event) => {
    setCoverage(event.target.value);
  };
  const handleSelectionWater = (event) => {
    setWater(event.target.value);
  };
  const handleSelectionTakeUp = (event) => {
    setTakeUpRate(event.target.value);
  };
  const handleSelectionTime = (event) => {
    setTimeFrame(event.target.value);
  };
  const handleSelectionFixedCharge = (event) => {
    setFixedCharge(event.target.checked);
  };
  const handleSubmit = () => {
    //guarntee no false submissions
    if (
      poverty == null ||
      coverage == null ||
      water == null ||
      takeUpRate == null
    ) {
      alert("Please select all options");
    } else {
      setDisplayResult(0);
      setSubmitState(1);
      setTimeout(() => {
        setSubmitState(0);
        setDisplayResult(1);
      }, 5000);
    }
  };

  return (
    <SiteWrapper>
      <div className="topHeader">
        <h2>Calculator for Differing Programs</h2>
      </div>
      <div className="grid-container">
        <div className="rightSide">
          <div className="centerDiv">
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Take up rate for eligible households.
              </FormLabel>
              <RadioGroup
                aria-label="Take up rate"
                name="TakeUpRate"
                value={takeUpRate}
                onChange={(event) => handleSelectionTakeUp(event)}
              >
                <FormControlLabel
                  value="50"
                  control={<StyledRadio />}
                  label="50% of eligible individuals use the program."
                />
                <FormControlLabel
                  value="60"
                  control={<StyledRadio />}
                  label="60% of eligible individuals use the program."
                />
                <FormControlLabel
                  value="70"
                  control={<StyledRadio />}
                  label="70% of eligible individuals use the program."
                />
                <FormControlLabel
                  value="80"
                  control={<StyledRadio />}
                  label="80% of eligible individuals use the program."
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="centerDiv">
            <FormControl className="formControl">
              <InputLabel labelId="essential_water_label">
                Amount of water deemed essential water
              </InputLabel>
              <Select
                labelId="essential_water_label"
                id="essential_water"
                value={water}
                onChange={(event) => handleSelectionWater(event)}
              >
                <MenuItem value={4500}>
                  4,500 gallons/ 6 ccf is deemed essential usage.
                </MenuItem>
                <MenuItem value={6000}>
                  6,000 gallons/ 8 ccf is deemed essential usage.
                </MenuItem>
                <MenuItem value={7500}>
                  7,500 gallons/ 10 ccf is deemed essential usage.
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="leftSide">
          <div className="centerDiv">
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Percentage of essential water covered by the program
              </FormLabel>
              <RadioGroup
                aria-label="Covered usage"
                name="CoveredUsage"
                value={coverage}
                onChange={(event) => handleSelectionCoverage(event)}
              >
                <FormControlLabel
                  value="25c"
                  control={<StyledRadio />}
                  label="25% of essential usage"
                />
                <FormControlLabel
                  value="50c"
                  control={<StyledRadio />}
                  label="50% of essential usage"
                />
                <FormControlLabel
                  value="75c"
                  control={<StyledRadio />}
                  label="75% of essential usage"
                />
                <FormControlLabel
                  value="100c"
                  control={<StyledRadio />}
                  label="100% of essential usag"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="centerDiv">
            <FormControl className="formControl">
              <InputLabel labelId="poverty_label">
                Eligibility requirement
              </InputLabel>
              <Select
                labelId="poverty_label"
                id="poverty"
                value={poverty}
                onChange={(event) => handleSelectionPoverty(event)}
              >
                <MenuItem value={100}>
                  At or below 100% of federal poverty rate.
                </MenuItem>
                <MenuItem value={138}>
                  At or below 138% of federal poverty rate.
                </MenuItem>
                <MenuItem value={200}>
                  At or below 200% of federal poverty rate.
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="lastSection">
        <div className="centerDiv">
          <FormControl className="formControl">
            <InputLabel labelId="TimeFrame_label">Timeframe</InputLabel>
            <Select
              labelId="TimeFrame_label"
              id="TimeFrame"
              value={timeFrame}
              onChange={(event) => handleSelectionTime(event)}
            >
              <MenuItem value={1}>Monthly</MenuItem>
              <MenuItem value={12}>Annually</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={fixedCharge}
                onChange={(event) => handleSelectionFixedCharge(event)}
                color="primary"
              />
            }
            label="Fixed Charges included"
          ></FormControlLabel>
        </div>
        <div className="submitButton">
          <Button variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
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
      <div className="buffer"></div>
      <SEO url="estimation" />
    </SiteWrapper>
  );
}

export default EstimationForm;
