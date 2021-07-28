// @flow

import React from "react";
import "./Main.css";
import $ from "jquery";

import { Page, Icon, Grid, Card, Table, colors } from "tabler-react";
import MapElement from "./components/MapElements.react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";
const libraries = ["places"];
function Home() {
  return (
    <SiteWrapper>
      <div className="containerHeader">
        <h1 className="header1">Water Assistance Tracker</h1>
      </div>
      <Page.Content>
        <Grid.Row cards={true}>
          <Grid.Col>
            <div className="HomeMap">
              <MapElement height="55vh" width="35vw" zoom={4} />
            </div>
          </Grid.Col>
          <Grid.Col lg={6}>
            <p>
              Water Assistance Tracker uses data collected by both the EPA and
              are own resources to track the water assistance programs create by
              water utilities these programs fall into 5 catagories: Bill
              Discount, Temporary Assistance, Water Efficiency, Flexible Terms,
              Lifeline Rates. There are 361 programs tracked from 231 utilities
              spanning 40 states. We examined 329 Utilities with 130 of them not
              offering any registerable assistance program. If you notice any
              inaccuracies in the data, out of date data or are know of a
              program we do not have listed please contact us either through
              WaterAssistanceTracker@gmail.com or are submit data page.
            </p>
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
                      data1: "Number of Utilities with WAPS",
                      data2: "Number of Utilities surveyed without WAPS",
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
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
