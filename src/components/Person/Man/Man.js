import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Man.css'

const Man = (props) => {
    const { name, institute, img, age, country, prize, score } = props.person;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    /* man container part */
    return (
        <div className="man-container">
            <img src={img} alt="" />
            <p><b>Name:</b> {name}</p>
            <p><b>Institute:</b> {institute}</p>
            <p><b>Country:</b> {country}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Score:</b> {score}</p>
            <p><b>Prize Money:</b> {prize}</p>
            <button onClick={() => props.handleAddToCart(props.person)}>{element} Add To Cart</button>
        </div>
    );
};

export default Man;