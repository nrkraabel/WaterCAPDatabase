// @flow

import * as React from "react";
import { Link } from "react-router-dom";

import { Page, Grid, Card } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
function DocPage() {
  return (
    <SiteWrapper>
      <Page.Content>
        <Grid.Row>
          <Grid.Col>
            <h1>Program Qualifications</h1>
            <p>
              In order for a program to be recorded, it had to fall into one of
              the type categories, be publicly advertised online, and be
              provided by or partnered with a utility. This is an active
              database and therefore only displays active programs. We do not
              record details of Covid-19 related programs. Instead we simply
              track in a binary variable whether a utility has a Covid-19
              related program.
            </p>
          </Grid.Col>
          <Grid.Col>
            <h1>Data Collection</h1>
            <p>
              The data was compiled from an{" "}
              <a
                href="https://www.epa.gov/sites/default/files/2016-04/documents/dw-ww_utilities_cap_combined_508-front2.pdf#:~:text=In%20response%2C%20a%20number%20of%20water%20and%20wastewater,%E2%80%9Cwater%20services%E2%80%9D%20or%20%E2%80%9Cwater%20utilities%E2%80%9D%20throughout%20this%20document%29."
                target="_blank"
                rel="noreferrer"
              >
                EPA report
              </a>{" "}
              and data gathered from utilities listed in water rate databases in
              the summer of 2021. Data was collected by examining utilities and
              municipalities websites along with contacting utilities directly
              via the phone. Data from the 2016{" "}
              <a
                href="https://www.epa.gov/sites/default/files/2016-04/documents/dw-ww_utilities_cap_combined_508-front2.pdf#:~:text=In%20response%2C%20a%20number%20of%20water%20and%20wastewater,%E2%80%9Cwater%20services%E2%80%9D%20or%20%E2%80%9Cwater%20utilities%E2%80%9D%20throughout%20this%20document%29."
                target="_blank"
                rel="noreferrer"
              >
                EPA report
              </a>{" "}
              was reexamined and updated along with the new data collection in
              summer 2021. There were 383 utilities examined, 137 had no
              programs.
            </p>
          </Grid.Col>
        </Grid.Row>
        {/* Definations are stored in on the google doc */}
        <h1>Type definitions</h1>
        <Grid.Row>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Bill Discount"
              isCollapsible
              isClosable
              isCollapsed
              body="Utilities reduce a customer’s bill, usually long-term. Can be applied to nearly any type of rate structure or aspect of the bill. This includes tax exemptions for water bills. Discounts that applied only a proportion of water determined by usage were also considered bill discounts. Example: Seattle Public Utilities, Utility Discount Program."
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Flexible Terms"
              isCollapsible
              isCollapsed
              isClosable
              body="Utilities help customers afford services through bill timing adjustment(e.g., moving from quarterly to monthly billing cycles), or levelized billing  (e.g., dividing total anticipated annual water and sewer bill by 12 to create a predictable monthly bill amount). Flexible terms often include some level of forgiveness of the full amount due. Common categories of different program types include payment plans, connection loans, managing arrears, levelized billing, bill timing. Example: Illinois American Water, Payment Arrangements program."
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Lifeline Rates"
              isCollapsible
              isCollapsed
              isClosable
              body="Customers pay a subsidized rate for a fixed amount of water, which is expected to cover that customer’s basic water needs. When water use exceeds the initial fixed amount of water (i.e., the lifeline block), the rates increase. Also known as a minimum bill, low-income rate structure, single tariff, water budget. Example: Corsicana Utilities Department, Senior Citizen Discount program."
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Temporary Assistance"
              isCollapsible
              isCollapsed
              isClosable
              body="Utilities help customers on a short-term or one-time basis to prevent disconnection of service or restore service after disconnection for households facing an unexpected hardship (e.g., death, job loss, divorce, domestic violence). Also known as emergency assistance, crisis assistance, grant, one-time reduction. Example: Philadelphia Water Department, Utility Emergency Services Fund (UESF) program."
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Water Efficiency"
              isCollapsible
              isCollapsed
              isClosable
              body="Utilities subsidize water efficiency measures by providing financial assistance for leak repairs and offering rebates for WaterSense-certified fixtures, toilets, and appliances. Also known as water conservation. Example:  Fayetteville Public Works Commission Water Utility, WaterSense High-Efficiency Toilet Incentive Program."
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Covid Assistance Program"
              isCollapsible
              isCollapsed
              isClosable
              body="Any program specifically listed to address the Covid-19 pandemic. Pre existing programs that have been retrofitted to address the financial hardship of the pandemic through both an expansion of eligibility and aid. This does not include pre existing programs that have changed language or expanded because of the pandemic. "
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <h2>Utilities Without Customer Assistance Programs</h2>
            <p>
              As part of our data collection process we examined 137 utilities
              that did not have a customer <br />
              assistance program you can download a pdf containing the full list
              of these utilities below.
            </p>
            {/* PDF stored in public pdf folder */}
            <Link
              to="./pdf/Water Utilties Without CAPs 9.24.2021.pdf"
              target="_blank"
              download
            >
              Download pdf
            </Link>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default DocPage;
