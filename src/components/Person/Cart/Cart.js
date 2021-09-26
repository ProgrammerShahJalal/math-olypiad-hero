import React from 'react';
import Single from '../../Single/Single';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    /* by using ruduce calculate the total budget */
    const reducer = (previous, current) => previous + current.prize;
    const totalBudget = cart.reduce(reducer, 0);
    return (
        <div>

            <h3>Person Added: {cart.length}</h3>
            <h3>Prize Money: {totalBudget}</h3>

            {
                cart.map(person => <Single key={person.key} person={person}></Single>)
            }

        </div>
    );
};

export default Cart;