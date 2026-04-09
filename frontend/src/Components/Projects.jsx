import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, ModalBody, Button, Carousel, CarouselItem, CardBody} from "react-bootstrap";
import './Projects.css';

const projects = [
  {
    id: 2,
    title: 'Portfolio',
    image: './portfolio.png',
    minimalDescription: 'Personal portfolio website.',
    fullDescription: 'My portfolio website built with React, featuring a clean and modern design with smooth animations and intuitive navigation.',
    tech: ['React', 'React-Bootstrap', 'CSS'],
  },
  {
    id: 3,
    title: 'Angrit - Workout Tracker',
    image: './tracker.png',
    minimalDescription: 'Workout tracking application.',
    fullDescription: 'A workout tracker application built with React and Tailwind CSS on the frontend, with Django REST API backend. Features Gemini AI integration for personalized workout recommendations and form analysis.',
    tech: ['React', 'Tailwind CSS', 'Django REST', 'Gemini API'],
  },
  {
    id: 4,
    title: 'Employee Management System',
    image: './system.png',
    minimalDescription: 'Employee management system.',
    fullDescription: 'An employee management system built with Django backend and vanilla JavaScript frontend. Features email notifications using Google SMTP authentication.',
    tech: ['Django', 'JavaScript', 'HTML', 'CSS', 'Google SMTP'],
  },
];

// Helper to classify tech as frontend or backend
const frontendTech = ["React", "React-Bootstrap", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML"];
const backendTech = ["MongoDB", "Express", "Django", "Django REST", "Google SMTP", "Gemini API"];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <Row>
        <p className='d-flex border-top mb-1 p-4 justify-content-center anton-regular text-uppercase text-white projects-heading'>Projects</p>
          <Col md = {12} className = " d-flex justify-content-center align-items-center gap-2">
         
            <Row>
        


              {projects.map(project => (
                <Col key={project.title } className =''>
                  <Card
                    className={`rounded-0 my-2 border-0 project-card${hoveredCard === project.id ? ' hovered' : ''}`}
                    onClick={() => setHoveredCard(hoveredCard === project.id ? null : project.id)}
                  >
                    <Card.Img className='rounded-0 project-image' src={project.image} />
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-center py-3'>{project.minimalDescription}</Card.Title>
                     
                        <div className="inter-tight fw-light project-extra-info mb-3 ">
                          {project.fullDescription}
                        </div>
                    
                      <div className="tech-badges">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className={`tech-badge ${frontendTech.includes(tech) ? 'frontend' : backendTech.includes(tech) ? 'backend' : ''}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

              
              
            

            </Row>
          </Col>
          </Row>
    </div>
  )
}

export default Projects
