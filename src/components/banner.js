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
                <p>
                  Our worship time will start at 10:00 a.m. on December 25, 2022 and January 1, 2023.<br/>
                  We will also not have Bible Classes.
                </p>
                <p>
                  Our normal 9:00 a.m. start time will resume on January 8, 2023.
                </p>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Banner;