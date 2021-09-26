import React from 'react';
import './Single.css'
const Single = (props) => {
    const { name, img } = props.person;


    return (
        <div className="single-container">
            <img src={img} alt="" />
            <p>{name}</p>
        </div>

    );
};

export default Single;