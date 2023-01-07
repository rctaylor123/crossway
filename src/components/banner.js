import React from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../styles/banner.scss';

const Banner = () => {
  return (
    <header>
      <div className="banner">
        <Container>
          <Row>
            <Col>
                <div className="brand">
                  <div>
                    Crossway
                  </div>
                  <hr className="separator" />
                  <div className="sub-brand">
                    Church of Christ
                  </div>
                </div>
                <div className="meeting-time">
                  Sundays at 9AM
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Banner;