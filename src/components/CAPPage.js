import React from "react";
import { Page, Grid, Card, StampCard } from "tabler-react";
import { Redirect, useHistory } from "react-router-dom";
import SiteWrapper from "../SiteWrapper.react";
import "./CAPPage.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

/* Program Info pages aren't dramically created instead there are 6 seperate pages for each program
since the most programs a single utility has 6 this done due to have th data is recorded. */
function CAPCard({ location }) {
  const history = useHistory();
  //redirects user if they don't have data or open in a new page
  if (location.state == null) {
    return <Redirect to="/390" />;
  }
  //CAP stores location data
  const CAP = location.state.selected;
  const selected = location.state.selected;
  const handleSelection = (event) => {
    if (event.target.value === 1) {
      history.push({
        pathname: "/programinfo",
        state: { selected },
      });
    }
    if (event.target.value === 2) {
      history.push({
        pathname: "/programinfo1",
        state: { selected },
      });
    }
    if (event.target.value === 3) {
      history.push({
        pathname: "/programinfo2",
        state: { selected },
      });
    }
    if (event.target.value === 4) {
      history.push({
        pathname: "/programinfo3",
        state: { selected },
      });
    }
    if (event.target.value === 5) {
      history.push({
        pathname: "/programinfo4",
        state: { selected },
      });
    }
    if (event.target.value === 6) {
      history.push({
        pathname: "/programinfo5",
        state: { selected },
      });
    }
  };

  return (
    <SiteWrapper>
      <Page.Content>
        <Grid.Row>
          <Grid.Col lg={6}>
            <Page.Title>
              {CAP.utility}, {CAP.state_abbrv}{" "}
            </Page.Title>
            <Card
              title={CAP.program1.name}
              isCollapsible
              isClosable
              body={CAP.program1.desc}
            />
            <Card
              title="Eligibility"
              isCollapsible
              isClosable
              body={CAP.program1.eligilibity}
            />
            <a
              href={CAP.program1.URL}
              rel="noreferrer"
              className="LinkUtility"
              target="_blank"
            >
              Click to view utility’s website for this program{""}
            </a>
          </Grid.Col>

          <Grid.Col lg={6}>
            {/*This aonly display if there is more than 1 program
          its a program select tool so user can change what program there 
          looking at. */}
            {CAP.programNum > 1 && (
              <div className="pageSelection">
                <h4>Display Other Programs</h4>
                <FormControl fullWidth variant="filled">
                  <InputLabel id="pageSelect">Programs</InputLabel>
                  <Select
                    labelId="select-Label"
                    id="pageSelect"
                    value={1}
                    label="Current Program"
                    onChange={(event) => handleSelection(event)}
                  >
                    <MenuItem value={1}>{CAP.program1.name}</MenuItem>
                    <MenuItem value={2}>{CAP.program2.name}</MenuItem>
                    {CAP.programNum > 2 ? (
                      <MenuItem value={3}>{CAP.program3.name}</MenuItem>
                    ) : null}
                    {CAP.programNum > 3 ? (
                      <MenuItem value={4}>{CAP.program4.name}</MenuItem>
                    ) : null}
                    {CAP.programNum > 4 ? (
                      <MenuItem value={5}>{CAP.program5.name}</MenuItem>
                    ) : null}
                    {CAP.programNum > 5 ? (
                      <MenuItem value={6}>{CAP.program6.name}</MenuItem>
                    ) : null}
                  </Select>
                </FormControl>
              </div>
            )}
            <StampCard
              color="red"
              icon="droplet"
              header={<div>Program Type: {CAP.program1.types}</div>}
              footer={
                <div>
                  Check the documentation page for more information on program
                  types.
                </div>
              }
            />
            <StampCard
              color="green"
              icon="user"
              header={
                <div>Program Target Population: {CAP.program1.hh_targeted}</div>
              }
            />
            {/* Stampcard don't allow logic statments inside of
             them so instead there is logic that display stampcard 
             with the text desired based on whether or not they have a program
            */}
            {CAP.Covid_CAP === "Yes" ? (
              <StampCard
                color="yellow"
                icon="check"
                header={
                  <div>
                    Utility has a program to address Covid-19 financial
                    distruption
                  </div>
                }
                footer={
                  <div>We do not track the details of these programs.</div>
                }
              />
            ) : (
              <StampCard
                color="yellow"
                icon="alert-circle"
                header={
                  <div>
                    Utility has no known program to address Covid-19 financial
                    distruption
                  </div>
                }
              />
            )}
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default CAPCard;
