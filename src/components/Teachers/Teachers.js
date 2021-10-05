import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import teacherImg from '../../images/t-1.jpg';
import teacherImg2 from '../../images/t-2.jpg';
import teacherImg3 from '../../images/t-3.jpg';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';


const Teachers = () => {
    // Teachers data load and setSatate
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    return (
        <Container>
            <section>
                <h2 className="mb-3">Our Main Teachers</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="border">
                            <div>
                                <img src={teacherImg} className="img-fluid" alt="" />
                            </div>
                            <div className="custome-teacher-color">
                                <h5>ASHIM KUMAR</h5>
                                <p>Professor, Dhaka University</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border">
                            <div>
                                <img src={teacherImg2} className="img-fluid" alt="" />
                            </div>
                            <div className="custome-teacher-color">
                                <h5>ARCHONA BALA</h5>
                                <p>Professor, Dhaka University</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border">
                            <div>
                                <img src={teacherImg3} className="img-fluid" alt="" />
                            </div>
                            <div className="custome-teacher-color">
                                <h5>KOHINUR TABASSUM</h5>
                                <p>Professor, Harvard College</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <h2 className="mb-3">Our Regular Teacher</h2>
                <Row xs={1} md={4} className="g-4">
                    {

                        teachers.slice(4, 8).map(teacher => <Teacher teacher={teacher}></Teacher>)
                    }

                </Row>
            </section>
        </Container>
    );
};

export default Teachers;