import React from "react";
import DataSubmit from "../components/DataSubmit";
import SiteWrapper from "../SiteWrapper.react";
import "../components/DataInput.css";
import { Page } from "tabler-react";
import SEO from "../components/SEO";

function inputPage() {
  return (
    <SiteWrapper>
      <Page.Content>
        <div className="align">
          <h1>Data Input</h1>
          <p>
            If you know of water assistance programs that we do not have listed
            please help us by inputting the details on the right. We will follow
            up to verify information before publicly posting. If you have any
            questions or would like to suggest corrections to existing entries
            in the data please contact us at waterassistanceprograms@gmail.com
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
      <SEO url="data_input" />
    </SiteWrapper>
  );
}

export default inputPage;
