// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(  function (item) {
//     console.log(item);
    
// }  )

// coding.forEach(  (val) => {
//     console.log(val);

// }  )

// function printMe(item){
//     console.log(item);
    
// } 

// coding.forEach(printMe)

// coding.forEach(  (item, index, arr)=>{
//     console.log(item, index, arr);
    
// }   )


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})