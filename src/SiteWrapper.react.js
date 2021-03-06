// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as WSULogo } from "./WSUCAHNRSSized.svg";

import { Site, Grid, List, Button, RouterContextProvider } from "tabler-react";
/* To add a nav add
{
  value: "Name displayed"
  to: "/url_extenison"
  icon: You can only use 
  LinkComponent: withRouter(NavLink) 
} */
const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Documentation",
    icon: "file",
    to: "/data_doc",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "FullScreen Map",
    to: "/map",
    icon: "map",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Data Input",
    to: "/data-input",
    icon: "server",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "About",
    icon: "user",
    to: "/about",
    LinkComponent: withRouter(NavLink),
  },
  /* {
    value: "Nationwide Program Estimator",
    icon: "percent",
    to: "/estimation",
    LinkComponent: withRouter(NavLink),
  }, */
];

class SiteWrapper extends React.Component {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Water",
          imageURL: "/Images/siteLogo.svg",
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          // copyright: (
          //   <React.Fragment>
          //     Copyright © 2021
          //     <a href="."> Washington State University</a>. Data collection
          //     <a
          //       href="https://people.ses.wsu.edu/cook/"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //     >
          //       {" "}
          //       Professor Joe Cook
          //     </a>{" "}
          //     All rights reserved.
          //   </React.Fragment>
          // ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <WSULogo />
              </Grid.Col>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./data_doc">Documentation</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="./about"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Contact Us
                </Button>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
