import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shriniwas Gavhane</span>{" "}
            from <span className="purple">Pune, India</span>.
            <br />
            I am pursuing my <span className="purple">B.E. in Computer Science</span> at{" "}
            <span className="purple">Wadia College of Engineering, Pune</span> (CGPA: 9.42).
            <br />
            I also hold a <span className="purple">Diploma in Computer Engineering</span> from{" "}
            <span className="purple">Govt. Polytechnic Awasari (Kh)</span>.
            <br />
            Previously, I worked as a <span className="purple">Project Engineer Intern</span> at{" "}
            <span className="purple">Codeft Technologies Pvt. Ltd.</span>
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Machine Learning & AI Research 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Full-Stack Web Apps 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Competitive Coding 🎯
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build intelligent and efficient systems that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shriniwas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
