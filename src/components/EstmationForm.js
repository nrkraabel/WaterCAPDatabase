import "./estimationForm.css";
import React, { useState } from "react";
import LoadingIcons from "react-loading-icons";
import { Page } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import SEO from "../components/SEO";
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
  const [timeFrame, setTimeFrame] = useState(1);
  const [submitState, setSubmitState] = useState(0);
  const [displayResult, setDisplayResult] = useState(0);
  const handleSelectionPoverty = (event) => {
    setPoverty(event.target.value);
  };
  const handleSelectionCoverage = (event) => {
    setCoverage(event.target.value);
  };
  const handleSelectionWater = (event) => {
    setWater(event.target.value);
  };
  const handleSelectionTime = (event) => {
    setTimeFrame(event.target.value);
  };
  const handleSelectionFixedCharge = (event) => {
    setFixedCharge(event.target.checked);
  };
  const handleSubmit = () => {
    if (poverty == null || coverage == null || water == null) {
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
      <Page.Content>
        <div className="documentationDiv">
          <div>
            <h3>Info about how this is all calculated</h3>
          </div>
          <p>Lots of cool information</p>
        </div>
        <div className="estimationDiv">
          <div>
            <h3>Calculator for Differing Programs</h3>
          </div>
          <div className="centerDiv">
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Cut off for coverage under this program
              </FormLabel>
              <RadioGroup
                aria-label="poverty rate"
                name="poverty"
                value={poverty}
                onChange={(event) => handleSelectionPoverty(event)}
              >
                <FormControlLabel
                  value="100"
                  control={<StyledRadio />}
                  label="100% of federal poverty rate"
                />
                <FormControlLabel
                  value="150"
                  control={<StyledRadio />}
                  label="150% of federal poverty rate"
                />
                <FormControlLabel
                  value="200"
                  control={<StyledRadio />}
                  label="200% of federal poverty rate"
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

          <div className="centerDiv">
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Cut off for coverage under this program
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
          <div>
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
      </Page.Content>
      <SEO url="estimation" />
    </SiteWrapper>
  );
}

export default EstimationForm;
