import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MindMate"
              description="Personalised AI-Based Platform for Mental Health Support. Fine-tuned DeBERTa-v3-small Transformer on GoEmotions dataset (96.9% accuracy, 0.95 ROC-AUC) and built a multimodal emotion analysis pipeline with Vision Transformer (ViT, 87.6% accuracy), anonymized media storage, and a Nodemailer emergency gateway."
              ghLink="https://github.com/Shriniwas1/Mind-mate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EduTrack"
              description="Full-stack School Management System supporting 3 user roles across 4 modules (Students, Staff, Hostel, Attendance) managing 500+ student records. Designed RESTful APIs & MongoDB models, and integrated an AI chatbot with Socket.io real-time chat reducing administrative workload by 40%."
              ghLink="https://github.com/Shriniwas1/EduTrack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Study Material Hub"
              description="Learning Resource Management Platform for uploading, viewing, rating, and categorizing PDF study materials supporting 200+ resources across 10+ categories. Built a secure file-upload & cloud-storage pipeline using Multer and Cloudinary with validation and automated media handling."
              ghLink="https://github.com/Shriniwas1/Study-Material-Hub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
