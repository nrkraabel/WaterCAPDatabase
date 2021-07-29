import React from "react";
import DataSubmit from "../components/DataSubmit";
import SiteWrapper from "../SiteWrapper.react";
import "../components/DataInput.css";
import { Page } from "tabler-react";

function inputPage() {
  return (
    <SiteWrapper>
      <Page.Content>
        <div className="align">
          <h1>Data Input</h1>
          <p>
            If you know of water assistance programs that we do not have listed
            please help us by inputting their details on the right. Any program
            that relates to a specific water utility and aims to assist
            customers we would love to hear about. If you have any questions or
            concerns you can contact us at waterassistanceprograms@gmail.com
          </p>
          <h2>Data Usage</h2>
          <p>
            The data collected here is reviewed by our team and added to the
            working database. This database is used to create tools to inform
            the public.
          </p>
          <h3>Security</h3>
          <p>
            All data is held within a secured database. Contact information is
            not shared publicly in any capacity.
          </p>
        </div>
        <DataSubmit />
      </Page.Content>
    </SiteWrapper>
  );
}

export default inputPage;
