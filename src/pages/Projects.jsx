import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import trojanMotor from "../assets/projects/trojanmotors.png"
import portfolio from "../assets/projects/portfolio.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="This portfolio website"
              description="This portfolio website is a full-stack web application developed using React. The front end is styled with React Bootstrap and custom CSS. Deployment and hosting are managed through AWS Amplify, with domain name managed through AWS Route53. Continuous integration and deployment are set up using AWS Amplify's CI/CD pipeline, automatically deploying updates whenever changes are pushed to the connected GitHub repository."
              ghLink="https://github.com/QuanyongBi/portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trojanMotor}
              isBlog={false}
              title="Interactive educative platform"
              description="This is an ongoing official program led by USC Marshall school of business. We are in charge to build a role-playing platform for teachers to perform interactive ELC learning program. To ensure the overall simplicity and maintainability for future operators and developer, We use React as frontend platform and Python+Flask as backend platform."
              ghLink="https://github.com/sssaang/ELC-RolePlay-Platform"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects