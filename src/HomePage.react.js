// @flow

import React from "react";
import "./Main.css";

import { Page, Grid, Card, colors } from "tabler-react";
//Compents
import MapElement from "./components/MapElements.react";
import SearchBar from "./components/SearchBar";
import SEO from "./components/SEO";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";

function Home() {
  return (
    <SiteWrapper>
      <div className="containerHeader"></div>
      <Page.Content>
        <Grid.Row>
          <Grid.Col lg={6}>
            <h1 className="header1">
              Water and sewer customer assistance programs in the U.S.
            </h1>
            <p className="pOpeningText">
              {"  "}
              <span className="indent">
                Water and sewer rates have risen faster than incomes in much of
              </span>
              the U.S., in part because of the need to replace and upgrade
              deteriorating infrastructure. This raises concerns about the
              affordability of combined water and sewer bills for low-income
              households. Many utilities use “customer assistance programs”, or
              CAPs, to help these customers. But many service providers do not
              use CAPs, either for lack of funding, administrative capacity, or
              expertise. The federal Low-Income Household Water Assistance
              Program (
              <a
                href="https://www.acf.hhs.gov/ocs/programs/lihwap"
                target="_blank"
                rel="noreferrer"
              >
                LIHWAP
              </a>
              ) was created as part of the COVID-19 response to fund assistance
              programs, but utilities without CAPs may struggle to understand
              how to use these funds effectively.
              <br />
              <br />
              <span className="indent">
                This site, created by researchers at Washington State
                University,
              </span>
              documents existing water and sewer CAPs as a service both to
              utilities, researchers and customers. We compiled the dataset by
              visiting the websites of the 225 U.S. cities with populations
              larger than 100,000, and added updated information for other
              cities that replied to the US
              <a
                href="https://www.epa.gov/sites/default/files/2016-04/documents/dw-ww_utilities_cap_combined_508-front2.pdf#:~:text=In%20response%2C%20a%20number%20of%20water%20and%20wastewater,%E2%80%9Cwater%20services%E2%80%9D%20or%20%E2%80%9Cwater%20utilities%E2%80%9D%20throughout%20this%20document%29."
                target="_blank"
                rel="noreferrer"
              >
                EPA’s 2016 survey on CAPs
              </a>
              {"  "}
              . In total, we list information for 379 programs from 246
              utilities in all 50 states. The database is not comprehensive, but
              we hope utility staff and other researchers will help us add and
              edit data to improve it.
              <br />
              <br />
              <span className="indent">
                To find programs for a specific utility, hover over the area on
              </span>
              To find programs for a specific utility, hover over the area on
              the map below or search for the utility to the right. The database
              then provides more detailed information on the type of assistance,
              eligibility, and our estimate of the financial value of the
              program.
            </p>
          </Grid.Col>
          <Grid.Col lg={6}>
            <h2 className="searchh2">Search for specific utilities</h2>
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
                  Percentage of Water and Sewer Utilities with Customer
                  Assistance Programs
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <C3Chart
                  style={{ height: "16rem" }}
                  data={{
                    columns: [
                      // each columns data
                      ["data1", 249],
                      ["data2", 137],
                    ],
                    type: "donut", // default type of chart
                    colors: {
                      data1: colors["green-darker"],
                      data2: colors["green"],
                    },
                    names: {
                      // name of each serie
                      data1: "Utilities With Programs",
                      data2: "Utilities Without Programs",
                    },
                  }}
                  padding={{
                    bottom: 0,
                    top: 0,
                  }}
                  legend={{
                    show: true,
                  }}
                />
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col sm={3}>
            <Card>
              <Card.Header>
                <Card.Title>Type of Customer Assistance Programs</Card.Title>
              </Card.Header>
              <Card.Body>
                <C3Chart
                  style={{ height: "20rem" }}
                  data={{
                    columns: [
                      // each columns data
                      ["data1", 182],
                      ["data2", 122],
                      ["data3", 5],
                      ["data4", 72],
                      ["data5", 21],
                    ],
                    type: "pie", // default type of chart
                    colors: {
                      data1: colors["rgb(0,63,92)"],
                      data5: colors["rgb(88,80,141"],
                      data2: colors["rgb(188,80,144"],
                      data3: colors["rgb(255,99,97"],
                      data4: colors["rgb(255,166,0"],
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
                    show: true,
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
              body="This database is primarily targeted to water professionals and academics. It does not include all programs in the US and we cannot guarantee it is up to date. If you are a customer seeking help with your bill, consult this database but also contact your utility or dial 411"
            />
          </Grid.Col>
          <Grid.Col sm={3}>
            <Card
              title="For Utility Staff"
              isCollapsible
              isClosable
              body="Data is updated monthly and all data is reviewed by a staff member. If you are an employee of a utility that has a customer assistance program that is either missing from our database or represented incorrectly, please help us improve the tool. Please contact us through are email waterassistanceprograms@gmail.com or use our data input tool on the data input page."
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <SEO url="home" />
    </SiteWrapper>
  );
}

export default Home;
