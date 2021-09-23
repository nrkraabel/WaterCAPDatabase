import React from "react";
import { Page, Grid, Card, StampCard } from "tabler-react";
import { Redirect, useHistory } from "react-router-dom";
import SiteWrapper from "../SiteWrapper.react";
import "./CAPPage.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function CAPCard4({ location }) {
  const history = useHistory();
  if (location.state == null) {
    return <Redirect to="/" />;
  }
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
              title={CAP.program5.name}
              isCollapsible
              isClosable
              body={CAP.program5.desc}
            />
            <Card
              title="Eligibility"
              isCollapsible
              isClosable
              body={CAP.program5.eligilibity}
            />
            <a
              href={CAP.program5.URL}
              rel="noreferrer"
              className="LinkUtility"
              target="_blank"
            >
              Click to view utility’s website for this program
            </a>
          </Grid.Col>

          <Grid.Col lg={6}>
            {CAP.programNum > 1 && (
              <div className="pageSelection">
                <p>Select Other Programs</p>
                <FormControl fullWidth variant="filled">
                  <InputLabel id="pageSelect">Programs</InputLabel>
                  <Select
                    labelId="select-Label"
                    id="pageSelect"
                    value={5}
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
              header={<div>Program Type: {CAP.program5.types}</div>}
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
                <div>Program Target Population: {CAP.program5.hh_targeted}</div>
              }
            />
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

export default CAPCard4;
