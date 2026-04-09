import React from "react";
import { Card, Col, Row } from "react-bootstrap";


function AboutMe() {
  return (
    <div>
    <Row className="d-flex justify-content-center">
      <Col md={6} xl= {12}>
        <Card className="bg-dark text-white border">
          <Card.Img src="/pcpic.png" alt="About Me" style={{ opacity: 0.7 }} />
        </Card>
      </Col>
      
      <Col md={6} xl={12} className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100%" }}>
        <Card.Body>
          <Card.Title className="fs-1 anton-regular text-uppercase text-white text-start">
            About Me
          </Card.Title>
          <Card.Text className="fs-5 mt-4 text-white text-start">
            I'm a passionate full-stack developer and I specialize in building web applications using Django and React, with a strong focus on creating scalable and impactful web applications.
          
          </Card.Text>
        </Card.Body>
      </Col>

    </Row>
    </div>
  );
}

export default AboutMe;
