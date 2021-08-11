// @flow

import React from "react";
import "./Main.css";

import { Page, Grid, Card, colors } from "tabler-react";
import MapElement from "./components/MapElements.react";
import SearchBar from "./components/SearchBar";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";
function Home() {
  return (
    <SiteWrapper>
      <div className="containerHeader"></div>
      <Page.Content>
        <Grid.Row>
          <Grid.Col lg={6}>
            <h1 className="header1">Water Assistance Programs</h1>
            <p className>
              Helping keep water bills affordable to all households is an
              important goal. This database tracks programs that U.S. water
              utilities use to help customers in need pay their water bills.
              Although we list information on 361 programs tracked from 231
              utilities spanning 40 states, we do not claim the database is
              comprehensive or representative. It uses data collected by both
              the EPA{" "}
              <a href="https://www.epa.gov/sites/default/files/2016-04/documents/dw-ww_utilities_cap_combined_508-front2.pdf#:~:text=In%20response%2C%20a%20number%20of%20water%20and%20wastewater,%E2%80%9Cwater%20services%E2%80%9D%20or%20%E2%80%9Cwater%20utilities%E2%80%9D%20throughout%20this%20document%29.">
                (LINK TO REPORT)
              </a>{" "}
              and Washington State University researchers, but we hope utility
              staff and other researchers will help us add and edit data to
              improve it. Building on the EPA’s categorization, we classify
              programs as Bill Discount, Temporary Assistance, Water Efficiency,
              Flexible Terms, and Lifeline Rates
              <a href="./data_doc"> (for more definitions, click here)</a>. To
              find programs for a specific utility, hover over the area on the
              map below or search for the utility to the right. The database
              then provides more detailed information on the type of assistance,
              eligibility, and our estimate of the financial value of the
              program.
            </p>
          </Grid.Col>
          <Grid.Col lg={6}>
            <div className="SearchHome">
              <SearchBar />
            </div>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <div className="HomeMap">
            <MapElement height="50vh" width="78.4vw" zoom={4.3} />
            <p className="smallFootnote">
              This map uses approximate locations of utilities.
            </p>
          </div>
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
              title="For Customers"
              isCollapsible
              isClosable
              body="This database is primarily targeted to water professionals and academics. It is not include all programs in the US and we cannot guarantee it is up to date. If you are a customer seeking help with your bill, consult this database but also contact your utility or dial 411"
            />
          </Grid.Col>
          <Grid.Col sm={3}>
            <Card
              title="For Utility Staff"
              isCollapsible
              isClosable
              body="Data is updated monthly and all data is reviewed by a staff member. If you are an employee of a utility that has an assistance program that is either missing from our database or represented incorrectly, please help us improve the tool. Please contact us (email hotlink) or use our data input tool (Link to page)"
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
