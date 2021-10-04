import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                <NavLink className="custom-header-title" to="/home">KIDS <span className="custome-title">WORLD</span></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/teachers">Teachers</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;