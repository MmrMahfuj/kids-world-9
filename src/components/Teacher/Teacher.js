import React from 'react';
import './Teacher.css';

const Teacher = (props) => {
    const { img, name, sub, } = props.teacher
    return (
        <div className="custom-teacher-cart rounded">
            <div>
                <img src={img} alt="" className="img-fluid rounded" />
            </div>
            <div className="custome-teacher-color">
                <h5>{name}</h5>
                <p>{sub}</p>
            </div>
        </div>

    );
};

export default Teacher;