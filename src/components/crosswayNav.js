import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const CrosswayNav = ({ pageInfo }) => (
    <>
    <Navbar bg="transparent" expand="lg" variant="light">
      <Container>
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
              <StaticImage
                src="../images/crossway-round.png"
                alt="Crossway Logo"
                height={75}
                width={75}
                className="d-inline-block align-middle"
              />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="index">Home</Nav.Link>
            </Link>
            {/* <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">About</Nav.Link>
            </Link> */}
            <Link to="/contact" className="link-no-style">
              <Nav.Link as="span" eventKey="contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
)

export default CrosswayNav;