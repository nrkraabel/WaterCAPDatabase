import React from "react";
import { Page } from "tabler-react";
import EstimationForm from "../components/EstmationForm";
import "../Main.css";

import SiteWrapper from "../SiteWrapper.react";

function Estimation() {
  return (
    <SiteWrapper>
      <Page.Content>
        <EstimationForm />
      </Page.Content>
    </SiteWrapper>
  );
}

export default Estimation;
