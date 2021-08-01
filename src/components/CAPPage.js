import React from "react";
import { Page, Grid, Card, StampCard } from "tabler-react";
import { Redirect } from "react-router-dom";
import SiteWrapper from "../SiteWrapper.react";
import Dropdown from "./dropdown";

function CAPCard({ location }) {
  if (location.state == null) {
    return <Redirect to="/" />;
  }
  const CAP = location.state.selected;

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
              title="Eligilibity"
              isCollapsible
              isClosable
              body={CAP.program1.eligilibity}
            />
            <a href={CAP.program1.URL} rel="noreferrer">
              Link to program page
            </a>
          </Grid.Col>
          <Grid.Col lg={6}>
            <StampCard
              color="red"
              icon="droplet"
              header={
                <div>
                  1.3: Average number of programs per utility in{" "}
                  {CAP.state_abbrv}{" "}
                </div>
              }
              footer={
                <div>
                  {" "}
                  1.6: Average number of programs per utility in the USA
                </div>
              }
            />
            <StampCard
              color="blue"
              icon="droplet"
              header={<div>13: Number of programs in {CAP.state_abbrv}</div>}
              footer={
                <div> 5: Average number of programs per state in the USA</div>
              }
            />
            <StampCard
              color="green"
              icon="dollar-sign"
              header={<div>$150 total value of this program annually</div>}
              footer={
                <div>
                  $50 Average value of a water assitance program in the USA
                </div>
              }
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default CAPCard;
