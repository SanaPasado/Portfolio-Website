import React from "react";
import { Card, Row,  } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, Github } from "react-bootstrap-icons";
function Socials() {
  return (
    <div>
      <Card.Title
        className="d-flex justify-content-center fs-1
             py-4 inter-tight text-uppercase text-white "
      >
         </Card.Title>
      <Card className="gap-5 d-flex flex-row justify-content-center align-items-center" style={{ backgroundColor: '#191818', border: 'none', padding: '2rem' }}>
        <a href="https://www.facebook.com/andrei.cunanan.756/" target="_blank" rel="noopener noreferrer">
          <Facebook className="fs-1 rounded-circle border p-2" style={{ cursor: 'pointer', color: 'white' }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram className="fs-1 rounded-circle border p-2" style={{ cursor: 'pointer', color: 'white' }} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="fs-1 rounded-circle border p-2" style={{ cursor: 'pointer', color: 'white' }} />
        </a>
        <a href="https://github.com/SanaPasado" target="_blank" rel="noopener noreferrer">
          <Github className="fs-1 rounded-circle border p-2" style={{ cursor: 'pointer', color: 'white' }} />
        </a>
      </Card>
    </div>
  );
}

export default Socials;
