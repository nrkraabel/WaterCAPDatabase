import MapElement from "../components/MapElements.react";

import SiteWrapper from "../SiteWrapper.react";

function MapPage(): React.Node {
  return (
    <SiteWrapper>
      <MapElement width="100vw" height="100vh" />
    </SiteWrapper>
  );
}

export default MapPage;
