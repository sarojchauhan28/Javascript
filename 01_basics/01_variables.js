const accountId = 11232
let accountEmail = "saroj@gmail.com"
var accountPassword = "123456"
accountCity = "Ghaziabad" // not a good idea to use without variable

let accountState; // it will print undefined

// accountId = 2 // not allowed
accountEmail = "parul@gmail.com"
accountPassword = "909056"
accountCity = "delhi"


console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])