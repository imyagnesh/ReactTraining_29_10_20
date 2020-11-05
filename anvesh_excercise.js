// QS:1 
// what breaks below?
const c1 = 1;
c1 = 3; // here directly breaking the below excution. output: Assignment to constant variable. 
console.log(c1)

// Or updating a string…
const c2 = "hello";
 c2 += " world!"; // if we comment the above c1 logic, here the statement is breaking. output: Assignment to constant variable.
console.log(c2)
// Or reassigning an object…
const c3 = {};
c3.name = "Geoff";
c3.someValue = "Sausage";
c3 = {}; // if we comment the above c2 logic, here the statement is breaking. output: Assignment to constant variable.
console.log(c3)

// QS:2
var n = 1;

function print() {
    console.log("print():1:",n); // output: undefined
    var n = 2;
    n++;
    console.log("print():2:",n); // output: 3
}

console.log("inline 1: ", n); // output: 1
print();
console.log("inline 2: ", n); // output: 1

// QS:3

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}

// note the var declaration of the loop iterator
for (let j = callbacks.length; j < 5; j++) { // replacing var to let giving correct output
  callbacks[j] = function () { return j * 2 }
}
console.log( callbacks[0]() ); // output: 0
console.log( callbacks[1]() ); // output: 2
console.log( callbacks[2]() ); // output: 4
console.log( callbacks[3]() ); // output: 6
console.log( callbacks[4]() ); // output: 8
