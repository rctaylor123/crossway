import * as React from "react";

import Banner from "../components/banner";
import CrosswayMap from "../components/crosswayMap";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout pageInfo="index">
    {/* <Seo title="Home" /> */}
    <Banner />
    <CrosswayMap />
  </Layout>
);

export default IndexPage;