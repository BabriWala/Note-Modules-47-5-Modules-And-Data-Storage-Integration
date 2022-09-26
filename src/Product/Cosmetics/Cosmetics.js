import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name:'alta', price: 400},
        {id: 2, name:'Palta', price: 600},
        {id: 3, name:'rongdhuni', price: 700},
        {id: 4, name:'sisa', price: 900},
        {id: 5, name:'agor', price: 1000},
        {id: 6, name:'jama', price: 1100},
        {id: 7, name:'ink', price: 1200},
        {id: 8, name:'laww', price: 1300},
        {id: 9, name:'biskuit', price: 1500}
    ];
    return (
        <div>
            <h2>Welcome To My Cosmetics Store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;