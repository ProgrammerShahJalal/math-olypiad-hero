import React from 'react';
import './Single.css'


const Single = (props) => {
    const { name, img, prize } = props.person;

    let prizeMoney = props.person.prize;
    if (!prizeMoney) {
        prizeMoney = 0;
    }
    else {
        prizeMoney = prize;
    }
    return (
        <div>
            {/* <h3>Prize Money: {prizeMoney}</h3> */}
            <div className="single-container">
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>

    );
};

export default Single;