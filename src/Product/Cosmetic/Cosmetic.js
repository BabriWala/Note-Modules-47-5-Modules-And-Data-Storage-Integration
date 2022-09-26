import React from 'react';
import './Cosmetic.css';
import { removeFromDb, addToDb, getTotal } from '../utilities/FakeDb'


const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id, 1)
    }
    const removeFromCart = (id) =>{
        removeFromDb(id);
    }
    // const total = getTotal(cosmetics)   
    // const addToCartWithParam = () => addToCart(id);

    return (
        <div className='cosmetics-container'>
            <p>Money Need </p>
            <h5>Cosmetic Name: {name} and Price is: {price} and It's ID :{id}</h5>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={() => {addToCart(id)}}>Add To Cart</button>
            <button onClick={() => {removeFromCart(id)}}>Remove From Cart</button>
        </div>
    );
};

export default Cosmetic;