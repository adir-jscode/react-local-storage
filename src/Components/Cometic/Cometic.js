import React from 'react';

const Cometic = (props) => {
    const { _id, name, age, gender, email } = props.cosmetic;
    const addToCart = (id,age) => {
        console.log(id,age);
    }

    // const addToCartWithParam =() => addToCart(id)
    return (
        <div>
            <p>ID : { _id}</p>
            <h1>Name: {name}</h1>
            <h3>Age : {age}</h3>
            <h3>Gender : {gender}</h3>
            <h3>Email : {email}</h3>
            <button onClick={()=>addToCart(_id,age)}>Add to Cart</button>
        </div>
    );
};

export default Cometic;