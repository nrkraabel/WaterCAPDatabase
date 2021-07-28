// @flow

import * as React from "react";
import 'firebase/firestore';


import { Page, Grid, Card } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
function DocPage(): React.Node {
  
  return (
    <SiteWrapper>
      <Page.Content title="Database Documentation">
      <Grid.Row>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Definations"
              isCollapsible
              isClosable
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam deleniti fugit incidunt, iste, itaque minima neque
            pariatur perferendis sed suscipit velit vitae voluptatem. A
            consequuntur, deserunt eaque error nulla temporibus!"
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Definations"
              isCollapsible
              isClosable
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam deleniti fugit incidunt, iste, itaque minima neque
            pariatur perferendis sed suscipit velit vitae voluptatem. A
            consequuntur, deserunt eaque error nulla temporibus!"
            />
          </Grid.Col>
          <Grid.Col md={6} xl={4}>
            <Card
              title="Definations"
              isCollapsible
              isClosable
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam deleniti fugit incidunt, iste, itaque minima neque
            pariatur perferendis sed suscipit velit vitae voluptatem. A
            consequuntur, deserunt eaque error nulla temporibus!"
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default DocPage;
