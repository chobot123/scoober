import React from "react";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

function Header() {

    return (
        <Navbar className="header" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="home">Scoober</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex text-sm-left left">
                        <NavDropdown id="company-dropdown" title="Company">
                            <NavDropdown.Item href="about">About us</NavDropdown.Item>
                            <NavDropdown.Item href="offerings">Our offerings</NavDropdown.Item>
                            <NavDropdown.Item href="howitworks">How Scoober works</NavDropdown.Item>
                            <NavDropdown.Item href="careers">Careers</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Safety</Nav.Link>
                        <Nav.Link href="#help">Help</Nav.Link>
                    </Nav> 
                    <Nav className="d-flex right">
                        <NavDropdown id="products-dropdown" title="Products">
                            <NavDropdown.Item href="taxi">Ride</NavDropdown.Item>
                            <NavDropdown.Item href="walks">Walks</NavDropdown.Item>
                            <NavDropdown.Item href="howitworks">Daycare</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#newsroom">Newsroom</Nav.Link>
                        <Nav.Link href="#contact">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;