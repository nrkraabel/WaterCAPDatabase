// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as WSULogo } from "./WSUCAHNRSSized.svg";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

const navBarItems: Array<navItem> = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  {
    value: "Database",
    icon: "server",
    subItems: [
      {
        value: "Data Input",
        to: "/data-input",
        LinkComponent: withRouter(NavLink),
      },
      {
        value: "Database Documentation",
        to: "/data_doc",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: "Map",
    to: "/map",
    icon: "map",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "About",
    icon: "user",
    to: "/about",
    LinkComponent: withRouter(NavLink),
  },
  {
    value: "Search Data",
    to: "/search",
    icon: "search",
    LinkComponent: withRouter(NavLink),
  },
];

class SiteWrapper extends React.Component<Props> {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Water Assistance Program database",
          imageURL: "./Images/siteLogo.svg",
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
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
                  <List.Item className="list-inline-item">
                    <a href="./search">Search</a>
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
