import React from 'react';
import './NotFound.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container>
                <div className="not-found">
                    <div>
                        <h2>404</h2>
                        <p>This page is'n available</p>
                        <NavLink to="/home">Go Back Home</NavLink>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default NotFound;