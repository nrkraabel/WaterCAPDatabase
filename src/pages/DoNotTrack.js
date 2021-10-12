import * as React from "react";
import "../Main.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function DoNotTrackPage() {
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div className="errorDiv">
      <p className="errorL">ERROR 390</p>
      <h1 className="errorH1">
        We do not track user data and therefore can not pull data requests from
        previous tabs in new tabs.
      </h1>
      <p className="smallFootnote">
        (we are working on supporting this functionality.)
      </p>
      <Button variant="contained" onClick={() => handleClick()}>
        {" "}
        HomePage{" "}
      </Button>
    </div>
  );
}

export default DoNotTrackPage;
