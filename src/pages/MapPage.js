import MapElement from "../components/MapElements.react";

import SiteWrapper from "../SiteWrapper.react";
import SEO from "../components/SEO";

function MapPage() {
  return (
    <SiteWrapper>
      <MapElement width="100vw" height="100vh" />
      <SEO url="map" />
    </SiteWrapper>
  );
}

export default MapPage;
