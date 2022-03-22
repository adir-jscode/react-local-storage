import React from 'react';
import { getItem } from '../../utilities/calculate';
import { addToDb, removeFromDb } from '../../utilities/localStorage';

const Cometic = (props) => {
    console.log(props);
    const { _id, name, age, gender, email } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    // const totalAge = getItem(age);

    // const addToCartWithParam =() => addToCart(id)
    return (
        <div>
            <p>ID : { _id}</p>
            <h1>Name: {name}</h1>
            {/* <h2>Age: {totalAge}</h2> */}
            <h3>Age : {age}</h3>
            <h3>Gender : {gender}</h3>
            <h3>Email : {email}</h3>
            <button onClick={() => addToCart(_id, age)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cometic;