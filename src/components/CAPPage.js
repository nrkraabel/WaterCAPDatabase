import React from "react";
import { Page, Grid, Card, colors } from "tabler-react";
import C3Chart from "react-c3js";
import SiteWrapper from "../SiteWrapper.react";
import Dropdown from "./dropdown";
function CAPCard({ location }) {
  const CAP = location.state.selected;

  var graphName = CAP.state_abbrv + "'s average number of CAPs";
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
            <Card title="Test">
              <C3Chart
                data={{
                  columns: [
                    // each columns data
                    ["data1", 2, 8, 6, 7, 14, 11],
                    ["data2", 5, 15, 11, 15, 21, 25],
                  ],
                  type: "line", // default type of chart
                  colors: {
                    data1: colors.blue,
                    data2: colors.green,
                  },
                  names: {
                    // name of each serie
                    data1: "USA average number of CAPS",
                    data2: graphName,
                  },
                }}
                axis={{
                  x: {
                    type: "category",
                    // name of each category
                    categories: [
                      "2013",
                      "2014",
                      "2015",
                      "2016",
                      "2017",
                      "2018",
                    ],
                  },
                }}
                padding={{
                  bottom: 0,
                  top: 0,
                }}
              />
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Dropdown program1={CAP.program1} />
      </Page.Content>
    </SiteWrapper>
  );
}

export default CAPCard;
