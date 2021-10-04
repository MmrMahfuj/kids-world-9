import React from 'react';
import { Container } from 'react-bootstrap';
import aboutImg from '../../images/about-img.jpg';
import aboutImg2 from '../../images/about-img-2.jpg';
import './About.css';

const About = () => {
    return (
        <Container className=" custom-about m-3">
            <section className="m-3 mb-5 text-center">
                <h1>About Us</h1>
                <p>Welcome to kids world, your number one source for all things School. We're dedicated to providing you the very best of space, with an emphasis on school, Child, parents.</p>
                <p>
                    Founded in 2021 by MD Mahfujur Rahman, kids world has come a long way from its beginnings in Dhaka, Bangladesh. When MD Mahfujur Rahman first started out, his passion for many option drove them to start their own business.
                </p>
                <p>
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.<br />
                    Sincerely,<br />

                    MD Mahfujur Rahman.
                </p>
            </section>

            <section className="border m-5 p-3">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div>
                            <div>
                                <img src={aboutImg} alt="" className="img-fluid" />
                            </div>
                            <h3>Welcome to Educator</h3>
                            <p className="text-right">We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div>
                                <img src={aboutImg2} alt="" className="img-fluid" />
                            </div>
                            <h3>Why us?</h3>
                            <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-light custome-text-align">
                            <h2>Learning includes</h2>
                            <div className="custome-text-align">
                                <p>&#9745; We enrich lives through playing</p>
                                <p>&#9745; Guiding the young generation</p>
                                <p>&#9745; Learn to confidently talk</p>
                                <p>&#9745; Children blossoming at school</p>
                                <p>&#9745; Excellence in early childhood</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>

    );
};

export default About;