const add = (first,second) => {
    return first + second;   
}

const multiply = (first, second) => {
    return first * second;
}

// const items = [
//     {id: 1, name: 'alta', price: 100},
//     {id: 2, name: 'alta', price: 100},
//     {id: 3, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
// ]
// const item = items.reduce((previous, current) => previous + current.price, 0);
// console.log(item);

const getItem = (products) => {
    const total = products.reduce((previous, current) => previous + current.price, 0);
    return total;

}

export { add, multiply,getItem};