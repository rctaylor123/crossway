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
                <h3 className="brand">
                  Crossway Church of Christ
                </h3>
                <h3>Coming to Celina early 2022!</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Banner;