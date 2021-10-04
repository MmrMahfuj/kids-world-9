import React from 'react';
import './Home.css';
import { Carousel, Container, Row, } from 'react-bootstrap';
import num1 from "../../images/sc-1.jpg";
import num2 from "../../images/sc-2.jpg";
import num3 from "../../images/sc-3.jpg";
import num4 from "../../images/sc-4.jpg";
import useServices from '../useServices/useServices';
import Service from '../Service/Service';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <section className="mb-4">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={num1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block custom-img w-100"
                            src={num2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={num3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={num4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section>
                <Container>

                    <Row xs={1} md={3} className="g-4">
                        {

                            services.slice(0, 4).map(service => <Service service={service}></Service>)
                        }
                    </Row>

                </Container>
            </section>
        </div>
    );
};

export default Home;