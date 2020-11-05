// groupby with gender + sort by name
const users = [
  {
      name: 'Rohit',
      age: 33,
      gender: 'male'
  },
  {
      name: 'Virat',
      age: 30,
      gender: 'male'
  },
  {
      name: 'Boomrah',
      age: 25,
      gender: 'male'
  },
  {
      name: 'kajol',
      age: 35,
      gender: 'female'
  },
  {
      name: 'deepika',
      age: 30,
      gender: 'female'
  }
]

/* something negative if first argument is less than second (should be placed before the second in resulting array)
something positive if first argument is greater (should be placed after second one)
0 if those two elements are equal. */

users.sort(function(a, b){
  if(a.name < b.name) { return -1; } 
  if(a.name > b.name) { return 1; }
  return 0;
})

console.log(users)

const groupByGender = users.reduce((p,c) => {
  (p[c.gender]= p[c.gender] || []).push(c)
  return p 
},{});

console.log(groupByGender)

/* output :
  { male:  
   [ { name: 'Boomrah', age: 25, gender: 'male' }, 
     { name: 'Rohit', age: 33, gender: 'male' }, 
     { name: 'Virat', age: 30, gender: 'male' } ], 
  female:  
   [ { name: 'deepika', age: 30, gender: 'female' }, 
     { name: 'kajol', age: 35, gender: 'female' } ] } 
*/