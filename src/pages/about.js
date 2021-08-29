import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

const AboutPage = () => (
  <Layout pageInfo="about">
    {/* <Seo title="About" /> */}
    <Card className="black-text">
      <Card.Body>
        <p>We're planting a church in Celina in partnership with <a href="https://shawneetrail.org">Shawnee Trail Church of Christ</a></p>

        <p>This is why we're doing it: because we want to.</p>
      </Card.Body>
    </Card>
  </Layout>
);

export default AboutPage;