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
        <Navbar bg="light" variant="light" className="mb-3">
            <Container>
                <Navbar.Brand to="/home">KIDS WORLD</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/teachers">Teachers</NavLink>
                    <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;