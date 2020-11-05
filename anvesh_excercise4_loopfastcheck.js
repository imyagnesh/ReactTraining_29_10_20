/* 
  find best looping technique from below list

  timing for 1 lac records for each looping technic

  1. for
  2. while
  3. dowhile
  4. foreach
*/
let arr = [...Array(100000).keys()];
//console.log(arr)

// for loop
console.time('for');
for(let i=0; i<arr.length; i++) {
  
}
console.timeEnd('for')
// while loop
let j=0;
console.time('while')
while(j < arr.length) {
  j++;
}
console.timeEnd('while')

// do while
let k = 0
console.time('do while') 
do {
  k++
} while (k < arr.length);
console.timeEnd('do while')

// .forEach() method
console.time('for each');
arr.forEach((e) => {
  //console.log(e)
  e++
});
console.timeEnd('for each')

/* Output :
  for: 2.997802734375 ms
  while: 5.681884765625 ms
  do while: 6.26904296875 ms
  for each: 6.72509765625 ms
*/
