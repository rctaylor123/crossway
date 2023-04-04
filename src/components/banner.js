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
                    8:15 - First Service<br/>
                    9:45 - Classes For All Ages<br/>
                    10:45 - Second Service
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Banner;