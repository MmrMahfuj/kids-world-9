import React from 'react';
import './Service.css';
import { Card, Col, Row } from 'react-bootstrap';

const Service = (props) => {
    const service = props.service
    console.log(service);
    const { title, tech, img, rutin, price } = props.service
    return (

        <Col>
            <Card className="custom-cart rounded">
                <Card.Img variant="top" src={img} className="custom-cart-img" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <small>{rutin}</small>
                    </Card.Text>
                    <span className="custom-style"><small>{tech}</small> <small className="custom-bold">${price}</small></span>
                </Card.Body>



            </Card>
        </Col >
    );
};

export default Service;