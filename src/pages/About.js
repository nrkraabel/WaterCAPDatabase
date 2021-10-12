import React from "react";
import { Page, Grid, Card } from "tabler-react";
import "../Main.css";
import SEO from "../components/SEO";
import { ReactComponent as WSULogo } from "../WSUCAHNRS.svg";
import SiteWrapper from "../SiteWrapper.react";

function About() {
  return (
    <SiteWrapper>
      <Page.Content>
        <Grid.Row md={6}>
          <Grid.Col>
            <div className="aboutDiv">
              <h1>About</h1>
              <p className="aboutText">
                The purpose of this database is to provide examples of CAPs to
                utilities throughout the United States and to provide data for
                researchers to examine what CAPs exist and how they are
                structured.
              </p>
              <p>
                This database was created by researchers at{" "}
                <a
                  href="https://research.wsu.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Washington State University
                </a>{" "}
                (Nicholas Kraabel, Tiana Randriamaro, and Prof.{" "}
                <a
                  href="https://people.ses.wsu.edu/cook/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Joe Cook
                </a>
                .
              </p>
              <h2>Contact</h2>
              <p className="aboutText">
                Contact our team via waterassistanceprograms@gmail.com you can
                also inform us of a program through our{" "}
                <a href="./data-input">input page</a>.
              </p>
              <WSULogo />
            </div>
          </Grid.Col>
          <Grid.Col>
            <img src={process.env.PUBLIC_URL + "/Images/WSUBrandResized.jpg"} />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
      <SEO url="about" />
    </SiteWrapper>
  );
}

export default About;
