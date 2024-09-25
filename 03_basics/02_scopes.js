// var c = 300
let a = 400


if (true){
    let a = 10
    const b = 20
    // console.log('inner:', a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Saroj"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two();
}
// one();

if(true){
    const username = "Saroj"
    if(username ==="Saroj"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++ intresting ++++++++++++++

addOne(5)
console.log(addOne(5))
function addOne(num){
    return num + 1

}

addTwo(5)
const addTwo = function(num){
    return num + 2
}