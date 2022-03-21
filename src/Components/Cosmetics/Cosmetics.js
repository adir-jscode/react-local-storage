import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cometic from '../Cometic/Cometic';

const Cosmetics = () => {

    // WE CAN LOAD DATA BY CREATING ARRAY OF OBJECTS
    const first = 10;
    const second = 30;
    const total = add(first, second);
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
        .then(data =>setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome to our store</h1>
            <h3>Total : {total}</h3>
            {
                cosmetics.map(cosmetic =><Cometic key={cosmetic._id} cosmetic={cosmetic}></Cometic>)
            }
        </div>
    );
};

export default Cosmetics;