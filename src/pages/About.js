import React from "react";
import { Page } from "tabler-react";
import "../Main.css";

import SiteWrapper from "../SiteWrapper.react";

function About() {
  return (
    <SiteWrapper>
      <Page.Content>
        <h1>About</h1>
        <p>
          This database was created by researchers at{" "}
          <a href="https://research.wsu.edu/">Washington State University</a>{" "}
          (Nicholas Kraabel, Tiana Randriamaro, and Prof.{" "}
          <a href="https://people.ses.wsu.edu/cook/">Joe Cook </a>
        </p>
        <h2>Contact</h2>
        <p>
          Contact via at waterassistanceprograms@gmail.com you can also inform
          us of a program through are <a href="./data-input">input page</a>
        </p>
      </Page.Content>
    </SiteWrapper>
  );
}

export default About;
