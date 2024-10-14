const myNums = [1, 2, 3, 4]

// const myTotal =  myNums.reduce( function ( acc, currval ){
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc +  currval
// }, 0)
const myTotal =  myNums.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Js Course",
        price : 999
    },
    {
        itemName : "py Course",
        price : 2999
    },
    {
        itemName : "Mobile Dev Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);