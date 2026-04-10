import React from 'react'
import Navbar from '../Components/Navigation'
import Projects from '../Components/Projects'
import TechStack from '../Components/TechStack'
import Education from '../Components/Education'
import Socials from '../Components/Socials'
import {Container, Row, Col, Card} from "react-bootstrap"
import Particlesbg from '../Components/Particlesbg'
import AboutMe from '../Components/AboutMe'
import { ArrowUpShort } from 'react-bootstrap-icons'
import { useEffect, useRef } from 'react'
import gsap from "gsap"


function Dashboard() {
	const leftColRef = useRef(null)
	const rightColRef = useRef(null)

	useEffect(() => {
		
		gsap.from(leftColRef.current, {x: -100, opacity: 0, duration: 1 })
		gsap.from(rightColRef.current, {x: 100, opacity: 0, duration: 1, })
	}, []);

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Particlesbg />
			<Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
				<section id="home" className="w-100">
					<Navbar/>
					<Row className="justify-content-center pt-5">
						{/* *1st tri column */}
						<Col ref = {leftColRef} md={6}>
							<Row>
								<Col className="d-flex flex-column align-items-center">
									<span className="fw-bold fs-1 text-white anton-regular"> 3 + </span>
									<span className="d-flex justify-content-center fs-6 text-white montserrat"> Workshops <br /> Attended</span>
								</Col>
								<Col className="d-flex flex-column align-items-center mb-5">
									<span className="fw-bold fs-1 text-white anton-regular"> 3 + </span>
									<span className="fs-6 text-white montserrat"> Personal  <br /> Projects</span>
								</Col>
							</Row>
							<Row>
								<Col className="d-flex flex-column align-items-start ms-5">
									<span className="anton-regular text-white text-uppercase" style={{ lineHeight: "1", fontSize: "100px", marginBottom: "10px" }}>Clyde Cunanan</span>
									<span className="montserrat text-white" style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.6", marginTop: "10px", maxWidth: "500px" }}>— Hi! I'm a student full stack developer specializing in Django and React.</span>
								</Col>
							</Row>
						</Col>
						{/* tri-column end */}
						{/* 2nd col */}
						<Col ref={rightColRef} md={6} className="d-flex justify-content-center">
							<Card className="m-0" style={{ border: "none", width: "100%", maxWidth: "450px", aspectRatio: "1" }}>
								<Card.Img variant='top'
									src="/placeholder.png"
									style={{ width: "100%", height: "125%",  marginTop: "-100px", objectFit: 'cover', objectPosition: 'top' }} />
							</Card>
						</Col>
						{/* 2nd col end */}
					</Row>
				</section>
				<section className="mt-5 w-100" id="projects">
					<Projects />
				</section>
				<section className="mt-5 w-100" id="skills">
					<TechStack />
				</section>
				<section className="mt-5 w-100" id="about">
					<Education />
				</section>
				<section className="mt-5 w-100" id="contact">
					<AboutMe />
				</section>
				<Socials />
			</Container>
			<footer className='d-flex justify-content-between py-4 mx-5 text-white montserrat' style={{ fontSize: '10px' }}>
				<span>
					© 2026 — Clyde Cunanan
				</span>
				<a className=" text-white" href="#home" style={{ textDecoration: 'none' }}>
					Back to Top <ArrowUpShort />
				</a>
			</footer>
		</div>
	)
}

export default Dashboard
