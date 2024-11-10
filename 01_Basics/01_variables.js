const accountId = 144553 
let accountEmail = "hntr.subm@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2

//console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.log(accountEmail);

console.table([accountId, accountEmail,accountPassword, accountCity])