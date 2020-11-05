//QS:1
// Template literals
// ES5
// var li = '<li>' +
//   '<div class="row">' +
//   '<div class="col-md-4">' +
//     '<img src="' + moviePoster + '" height="250" alt="" />' +
//   '</div>' +
//   '<div class="col-md-8">' +
//      '<h2>' + movieTitle + '</h2>' +
//   '</div>' +
//    '</div>' +
// '</li>';

// ES6 
var moviePoster = 'Teaser'
var movieTitle = 'RRR'
var li = `<li>
    <div class="row">
      <div class="col-md-4">
        <img src="${moviePoster}" height="250" alt="" />
      </div>
      <div class="col-md-8">
        <h2>${movieTitle}</h2>
      </div>
    </div>
  </li>`
console.log(li)
// ==============================================
//QS:2
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(2,3))
// ES6
const mul = (num1,num2) => num1 * num2
console.log(mul(2,3))
// ==============================================
//QS:3
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

//ES6

const toCelsius_es6 = (fahrenheit) => (5/9) * (fahrenheit-32)
console.log(toCelsius_es6(98.4))
// ==============================================
//QS:4
//This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  var numStr = num.toString();             
  var numZeros = totalLen - numStr.length; 
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}

console.log(padZeros(5,5))

const padZeros_es6 = (num, totalLen) => {
  let numStr = num.toString();             
  let numZeros = totalLen - numStr.length; 
  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr; 
}
console.log(padZeros_es6(5,5))
// ==============================================
//QS:5
function power(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2,4))

//es6
const power_es6 = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power_es6(2,4))
// ==============================================
//QS:6
function greet(who) {
  console.log("Hello " + who);
}
console.log(greet('anvesh'))
//es6 

const greet_es6 = (who) => { console.log("Hello " + who) }
greet_es6('anvesh')
// ==============================================
//QS:7
const account = {
  username: "marijn",
  password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)
