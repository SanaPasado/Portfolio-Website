import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./TechStack.css";

const techs = [
  { name: "React", icon: process.env.PUBLIC_URL + "/react-removebg-preview.png" },
  { name: "PostgreSQL", icon: process.env.PUBLIC_URL + "/postgres.jpg" },
  { name: "Git", icon: process.env.PUBLIC_URL + "/git-removebg-preview.png" },
  { name: "Django REST", icon: process.env.PUBLIC_URL + "/django-removebg-preview.png" },
  { name: "CSS", icon: process.env.PUBLIC_URL + "/css-removebg-preview.png" },
  { name: "HTML", icon: process.env.PUBLIC_URL + "/html-removebg-preview.png" },
  { name: "Bootstrap", icon: process.env.PUBLIC_URL + "/bootstrap-removebg-preview.png" },
];

const TechStack = () => (
  <div className="border-top pt-5 techstack-container">
    <Row className="align-items-center">
      <Col md={6}>
        <h2 className="anton-regular text-uppercase text-white" style={{ fontSize: 'clamp(32px, 8vw, 70px)', textAlign: 'left', marginBottom: 0 }}>
          My
          <br />
          <span style={{ fontSize: 'clamp(40px, 10vw, 90px)', lineHeight: 1 }}>Tech Stack</span>
        </h2>
      </Col>
      <Col md={6}>
        <Card className="techstack-card">
          <Card.Body>
            <div className="tech-list">
              {techs.map((tech) => (
                <div className="tech-item" key={tech.name}>
                  <img src={tech.icon} alt={tech.name + ' logo'} className="tech-icon" />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default TechStack;
