import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Man from './Man/Man';
import './Person.css'

const Person = () => {
    const [persons, setPersons] = useState([])
    const [cart, setCart] = useState([]);

    /* load data from our local JSON file */
    useEffect(() => {
        fetch("./math.JSON")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    /* handle add to cart button */
    const handleAddToCart = person => {
        const newCart = [...cart, person];
        setCart(newCart);
    }
    return (
        <div className="person-container">
            <div className="talent-person">
                {
                    persons.map(person => <Man
                        key={person.id}
                        person={person}
                        handleAddToCart={handleAddToCart}
                    ></Man>)
                }
            </div>
            {/* cart container part */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Person;