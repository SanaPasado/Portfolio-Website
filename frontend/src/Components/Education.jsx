import React from 'react'
import "./Education.css"
import { Card, Col, Row } from 'react-bootstrap'


function Education() {
  return (
    <div>
      <Card.Title className='border-top d-flex justify-content-center fs-1
       py-3 inter-tight text-uppercase text-white'></Card.Title>
      <Row>
        
        <Col md={12}>
        <Card.Title className='pb-3  d-flex justify-content-center
    anton-regular text-uppercase text-white' style={{fontSize: 'clamp(20px, 6vw, 48px)'}}>Education</Card.Title>
          <Card className="r-0 education-card" style={{ backgroundColor: '#1a1a1a', padding: 'clamp(1rem, 5vw, 2rem)', borderRadius: '8px', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Current Badge */}
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <span className="montserrat text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: '600' }}>
                Current
              </span>
            </div>

            {/* Education Details */}
            <div>
              <p className="montserrat text-white" style={{ margin: '0 0 0.5rem 0', fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: '600' }}>
                Student
              </p>
              <h3 className="anton-regular text-white" style={{ margin: '0 0 0.5rem 0', fontSize: 'clamp(18px, 5vw, 24px)' }}>
                Holy Angel University
              </h3>
              <p className="montserrat text-white" style={{ margin: '0 0 1.5rem 0', fontSize: 'clamp(12px, 3vw, 14px)', opacity: 0.7 }}>
                Angeles City, Philippines
              </p>

              <p className="montserrat text-white" style={{ margin: '0 0 1.5rem 0', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.6' }}>
                Bachelor of Science in Computer Engineering
              </p>

              <p className="montserrat text-white" style={{ margin: 0, fontSize: 'clamp(10px, 2vw, 12px)', opacity: 0.8 }}>
                Aug 2024 → Present
              </p>

                <Col md={6}>
         




             </Col>







            </div>
          </Card>
        </Col>
        
    
      </Row>
    </div>
  )
}

export default Education
