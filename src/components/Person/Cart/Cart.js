import React from 'react';
import Single from '../../Single/Single';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    return (
        <div>

            <h3>Person Added: {cart.length}</h3>
            <h3>Prize Money: {cart.prize}</h3>
            {
                cart.map(person => <Single key={person.key} person={person}></Single>)
            }

        </div>
    );
};

export default Cart;