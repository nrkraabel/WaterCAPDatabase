import React from "react";
import { Page, Grid, Card, StampCard } from "tabler-react";
import { Redirect, useHistory } from "react-router-dom";
import SiteWrapper from "../SiteWrapper.react";
import "./CAPPage.css";

function CAPCard4({ location }) {
  const history = useHistory();
  if (location.state == null) {
    return <Redirect to="/" />;
  }
  const CAP = location.state.selected;
  const selected = location.state.selected;
  const handleSelection = (event) => {
    console.log(event);
    if (event.target.value === "1") {
      history.push({
        pathname: "/programinfo",
        state: { selected },
      });
    }
    if (event.target.value === "2") {
      history.push({
        pathname: "/programinfo1",
        state: { selected },
      });
    }
    if (event.target.value === "3") {
      history.push({
        pathname: "/programinfo2",
        state: { selected },
      });
    }
    if (event.target.value === "4") {
      history.push({
        pathname: "/programinfo3",
        state: { selected },
      });
    }
    if (event.target.value === "5") {
      history.push({
        pathname: "/programinfo4",
        state: { selected },
      });
    }
    if (event.target.value === "6") {
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
              title="Eligilibity"
              isCollapsible
              isClosable
              body={CAP.program5.eligilibity}
            />
            <a href={CAP.program5.URL} rel="noreferrer" className="LinkUtility">
              Click to view utility’s website for this program
            </a>
            <p></p>
            {CAP.programNum > 1 && (
              <div class="box">
                <select onChange={(event) => handleSelection(event)}>
                  <option value="5">{CAP.program5.name}</option>
                  <option value="1">{CAP.program1.name}</option>
                  <option value="2">{CAP.program2.name}</option>
                  <option value="3">{CAP.program3.name}</option>
                  <option value="4">{CAP.program4.name}</option>
                  {CAP.programNum > 5 ? (
                    <option value="6">{CAP.program6.name}</option>
                  ) : null}
                </select>
              </div>
            )}
          </Grid.Col>

          <Grid.Col lg={6}>
            <StampCard
              color="red"
              icon="droplet"
              header={<div>Total annual funding for the program </div>}
              footer={<div> Unknown</div>}
            />
            <StampCard
              color="blue"
              icon="droplet"
              header={<div>Estimated number of participants</div>}
              footer={<div> Unknown</div>}
            />
            <StampCard
              color="green"
              icon="dollar-sign"
              header={
                <div>share of eligible participants who participants</div>
              }
              footer={<div>Unknown</div>}
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
                    Utility has no program to address Covid-19 financial
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
