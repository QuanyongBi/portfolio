// Techstack.js
import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import techStackData from "./TechstackData.jsx";
import "./Techstack.css";

const Techstack = () => {
  return (
    <Container fluid className="techstack-section">
      <Row className="justify-content-center">
        {techStackData.map((tech, index) => (
          <Col xs={12} md={6} lg={4} className="techstack-col" key={index}>
            <div className="techstack-card">
              <div className="techstack-icon">{tech.icon}</div>
              <div className="techstack-info">
                <h5>{tech.name}</h5>
                <ProgressBar
                  now={tech.level}
                  label={`${tech.level}%`}
                  variant="progress"
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Techstack;
