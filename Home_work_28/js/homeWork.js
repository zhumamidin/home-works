//First task
///////////////////////////////////////////////////////////////

let userName = "иВан";
userName = userName.toLowerCase();

let newStr = userName[0].toUpperCase() + userName.substring(1);

console.log(newStr);

//Second task
////////////////////////////////////////////////////////////////

let myPrice = "$120";

console.log(myPrice.substring(1, 5));

//Third task
////////////////////////////////////////////////////////////////

fruits = ["Яблоко", "Абрикос", "Апельсин"];

console.log("Вы удалили " + fruits.pop());
let removed = fruits.splice(2, 1);
console.log("Вы съели " + removed);
let removed1 = fruits.splice(0, 1);
console.log("Вы съели " + removed1);
console.log(removed1, removed);
console.log("Остался " + fruits);
