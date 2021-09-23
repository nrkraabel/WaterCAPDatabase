import React from "react";
import { Page } from "tabler-react";
import "../Main.css";
import SEO from "../components/SEO";

import SiteWrapper from "../SiteWrapper.react";

function About() {
  return (
    <SiteWrapper>
      <Page.Content>
        <div className="aboutDiv">
          <h1>About</h1>
          <p className="aboutText">
            The purpose of this database is to provide examples of CAPs to
            utilities throughout the United States and to provide data for
            researchers to examine what CAPs exist and how they are structured.
          </p>
          <p>
            This database was created by researchers at{" "}
            <a href="https://research.wsu.edu/">Washington State University</a>{" "}
            (Nicholas Kraabel, Tiana Randriamaro, and Prof.{" "}
            <a href="https://people.ses.wsu.edu/cook/">Joe Cook</a>.
          </p>
          <h2>Contact</h2>
          <p className="aboutText">
            Contact via at waterassistanceprograms@gmail.com you can also inform
            us of a program through our <a href="./data-input">input page</a>.
          </p>
        </div>
      </Page.Content>
      <SEO url="about" />
    </SiteWrapper>
  );
}

export default About;
