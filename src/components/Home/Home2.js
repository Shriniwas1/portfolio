import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Computer Science Engineer</b> who thrives
              on turning complex real-world problems into intelligent, elegant, and scalable
              solutions — bridging the worlds of <b className="purple">Full-Stack Engineering</b> and{" "}
              <b className="purple">Artificial Intelligence</b>.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Python, and HTML/CSS{" "}
                </b>
              </i>
              — working fluidly across both frontend and backend stacks to build robust,
              production-ready systems.
              <br />
              <br />
              My deep interest lies in
              <i>
                <b className="purple">
                  {" "}
                  AI/ML Engineering, Natural Language Processing, and Computer Vision —{" "}
                </b>
              </i>
              having fine-tuned <b className="purple">Transformer models</b> (DeBERTa, ViT) using{" "}
              <b className="purple">PyTorch</b> and <b className="purple">Hugging Face</b>,
              building multimodal pipelines that fuse text and image signals for real-time inference.
              <br />
              <br />
              On the full-stack side, I architect end-to-end systems with
              <b className="purple"> Node.js</b>, <b className="purple">React.js</b>,{" "}
              <b className="purple">Express.js</b>, and <b className="purple">MongoDB</b> —
              integrating <b className="purple">RESTful APIs</b>, real-time communication via{" "}
              <b className="purple">Socket.io</b>, and cloud services like{" "}
              <b className="purple">Firebase</b> and <b className="purple">Cloudinary</b> to
              deliver seamless, high-performance user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
