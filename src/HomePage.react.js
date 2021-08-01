// @flow

import React from "react";
import "./Main.css";

import { Page, Grid, Card, colors } from "tabler-react";
import MapElement from "./components/MapElements.react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";
function Home() {
  return (
    <SiteWrapper>
      <div className="containerHeader"></div>
      <Page.Content>
        <Grid.Row cards={true}>
          <Grid.Col lg={6}>
            <h1 className="header1">Water Assistance Programs</h1>
            <p className>
              This website tracks utilities water assistance programs using data
              collected by both the EPA and our resources to track the water
              assistance programs create by water utilities these programs fall
              into 5 categories: Bill Discount, Temporary Assistance, Water
              Efficiency, Flexible Terms, Lifeline Rates. There are 361 programs
              tracked from 231 utilities spanning 40 states. We examined 329
              Utilities with 130 of them not offering any registerable
              assistance program. If you notice any inaccuracies in the data,
              out-of-date data, or know of a program we do not have listed
              please contact us either through waterassistanceprograms@gmail.com
              or our data input page.
            </p>
          </Grid.Col>
          <Grid.Col>
            <div className="HomeMap">
              <MapElement height="55vh" width="35vw" zoom={4} />
              <p className="smallFootnote">
                This map uses approximate locations of utilities.
              </p>
            </div>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col sm={3}>
            <Card>
              <Card.Header>
                <Card.Title>
                  Percentage of Utilities with Water Assistance
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <C3Chart
                  style={{ height: "12rem" }}
                  data={{
                    columns: [
                      // each columns data
                      ["data1", 231],
                      ["data2", 108],
                    ],
                    type: "donut", // default type of chart
                    colors: {
                      data1: colors["green"],
                      data2: colors["green-light"],
                    },
                    names: {
                      // name of each serie
                      data1: "Number of Utilities with Water Assistance",
                      data2:
                        "Number of Utilities surveyed without Water Assistance",
                    },
                  }}
                  legend={{
                    show: false, //hide legend
                  }}
                  padding={{
                    bottom: 0,
                    top: 0,
                  }}
                />
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col sm={3}>
            <Card>
              <Card.Header>
                <Card.Title>Type of Water Assistance</Card.Title>
              </Card.Header>
              <Card.Body>
                <C3Chart
                  style={{ height: "12rem" }}
                  data={{
                    columns: [
                      // each columns data
                      ["data1", 232],
                      ["data2", 107],
                      ["data3", 4],
                      ["data4", 104],
                      ["data5", 29],
                    ],
                    type: "pie", // default type of chart
                    colors: {
                      data1: colors["blue-darker"],
                      data5: colors["blue-dark"],
                      data2: colors["blue"],
                      data3: colors["blue-light"],
                      data4: colors["blue-lighter"],
                    },
                    names: {
                      // name of each serie
                      data1: "Bill Discount",
                      data2: "Flexible Terms",
                      data3: "Lifeline Rate",
                      data4: "Temporary Assistance",
                      data5: "Water Efficiency",
                    },
                  }}
                  legend={{
                    show: false, //hide legend
                  }}
                  padding={{
                    bottom: 0,
                    top: 0,
                  }}
                />
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col sm={3}>
            <Card
              title="None Utility Specific Programs"
              isCollapsible
              isClosable
              body="Our database only tracks utility-specific programs if you can’t find a program that your utility provides here look at your local salvation army chapter as many provide bill assistance for those struggling to make ends meet. There are also many other charitable organizations that provide some form of utility assistance that will not be tracked in our database."
            />
          </Grid.Col>
          <Grid.Col sm={3}>
            <Card
              title="Data Integrity "
              isCollapsible
              isClosable
              body="Data is updated monthly and all are data is human reviewed. If you find any inaccuracies please let us know"
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
