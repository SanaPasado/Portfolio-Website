    import React from 'react'
    import {Navbar} from 'react-bootstrap'
    import {Container} from "react-bootstrap"
    import {Nav} from 'react-bootstrap'
    import {ArrowRightShort} from 'react-bootstrap-icons'

    function Navigation() {
      return (
        <div>
          <Navbar variant = "light" className = "fixed-top"fluid bg="light" expand="lg" style={{position: 'fixed'}}>
            <Navbar.Toggle className='ms-2'aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav"> 
            <Container className = "d-flex justify-content-between align-items-center ms-2 ms-md-5 mt-2 mb-2 ps-2 ps-md-6 "> 
            <Container className = "d-flex align-items-center m-2 ps-6 gap-5">
          
          <Nav>
            <Nav.Item>
            <Nav.Link className=" fw-bold fs-6 me-3 " href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item >
          <Nav.Link className=" fw-bold fs-6 me-3" href="#projects">Projects</Nav.Link>
          </Nav.Item>

          <Nav.Item > 
            <Nav.Link className=" fw-bold  fs-6 me-3" href="#skills">Skills</Nav.Link>
          </Nav.Item>

            <Nav.Item >
          <Nav.Link className=" fw-bold fs-6 me-3" href="#about">About Me</Nav.Link>
          </Nav.Item>

            <Nav.Item >
          <Nav.Link className=" fw-bold fs-6  me-3" href="#services">Services</Nav.Link>
          </Nav.Item>

            <Nav.Item >
          <Nav.Link className=" fw-bold fs-6 me-3 d-lg-none" href="#contact">Contact</Nav.Link>
          </Nav.Item>
          </Nav>
          </Container>
          
            <Nav>
      <Nav.Item className='d-none d-lg-block' >
          <Nav.Link className=" d-flex align-items-center border-bottom fw-bold fs-6 " href="#contact">Contact <ArrowRightShort className='fs-5'/></Nav.Link>
          </Nav.Item>
            </Nav>
            </Container>

                </Navbar.Collapse>

            </Navbar>
        </div>
      )
    }

    export default Navigation
