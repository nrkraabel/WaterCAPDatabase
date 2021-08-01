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
} from "./pages";

import HomePage from "./HomePage.react";

import DatabaseDoc from "./components/DatabaseDoc.react";
import CAPPage from "./components/CAPPage";

import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
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
          <Route exact path="/search" component={SearchPage} />

          <Route component={Error404} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
