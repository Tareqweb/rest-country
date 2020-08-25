import React from 'react';
import Country from '../Country/Country';

const Cart = (props) => {
    const cart=props.cart;
    const totalPopulation=cart.reduce((sum,country)=>sum+country.population,0)
    return (
        <div>
            <h2>This is Cart:{cart.length}</h2>
            <p>Total population:{totalPopulation}</p>
        </div>
    );
};

export default Cart;