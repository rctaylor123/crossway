import * as React from "react";
import ContactUsForm from "../components/contactUsForm";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

const ContactPage = () => (
  <Layout pageInfo="contact">
    {/* <Seo title="Contact Us" /> */}
    <Card className="black-text">
      <Card.Body>
        <h1>Contact Us</h1>
        <p>Fill out the form below and someone will get back to you.</p>
        <p>You can also <a href="https://facebook.com/crosswaycelina">find us on Facebook!</a></p>

        <ContactUsForm></ContactUsForm>
      </Card.Body>
    </Card>
  </Layout>
);

export default ContactPage;