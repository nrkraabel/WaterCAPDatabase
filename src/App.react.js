import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  InputPage,
  About,
  MapPage,
  SearchPage,
  Estimation,
} from "./pages";

import HomePage from "./HomePage.react";

import DatabaseDoc from "./components/DatabaseDoc.react";
import CAPPage from "./components/CAPPage";
import CAPPage1 from "./components/CAPPage1";
import CAPPage2 from "./components/CAPPage2";
import CAPPage3 from "./components/CAPPage3";
import CAPPage4 from "./components/CAPPage4";
import CAPPage5 from "./components/CAPPage5";

import "tabler-react/dist/Tabler.css";

function App(props) {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/503" component={Error503} />
          <Route exact path="/data_doc" component={DatabaseDoc} />
          <Route exact path="/empty-page" component={Empty} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/data-input" component={InputPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/programinfo" component={CAPPage} />
          <Route exact path="/programinfo1" component={CAPPage1} />
          <Route exact path="/programinfo2" component={CAPPage2} />
          <Route exact path="/programinfo3" component={CAPPage3} />
          <Route exact path="/programinfo4" component={CAPPage4} />
          <Route exact path="/programinfo5" component={CAPPage5} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/estimation" component={Estimation} />

          <Route component={Error404} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
