// function greet(val) {
//     console.log(`Hello ${val}`);
// }
// greet("Najeeb")




// function sum(a,b) {
//     return a + b; 
// }
// let result = sum(5,2);
// console.log(result);




// function greet(a,b,c) {
//     if (a > b && a > c) return a;
//     else if (b > a && b > c) return b;
//     else if (c > a && c > b) return c;
//     else return "Equal values";
// }
// let result = greet(9, 10, 10);
// console.log(result);



// function calculateBill(price, quantity){
//     return price * quantity;
// }
// let result = calculateBill(1000, 2);
// console.log(result);



// let askName = prompt('What Is Your Name');
// function luckyNumber(val) {
//     let num = Math.floor(Math.random() * 10) + 1;;
    // alert(`${val} Your Lucky Number IS ${num}`);
// }
// luckyNumber(askName);


function choice(val) {
    if (val === Tea) return "☕ Your tea is ready!";
    else if (val === coffee) return "🍵 Your coffee is ready!";
    else return "Chose Only One (Tea And Coffee)";
}

let result = choice("Tea");

console.log(result);