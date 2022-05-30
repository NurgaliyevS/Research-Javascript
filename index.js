const strArray = ['Javascript', 'Python', 'PHP', 'Java', 'C']

// High-order function
// Analogue to .map function
// takes as argument arr & function
// return result as a new Array
function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const lenArray = mapForEach(strArray, function(item){
  return item.length;
})

// console.log(lenArray)

let i = 0;

// Prefix increment (++i) increments, and returns the new, incremented value;
console.log(++i, 'Prefix increment'); // result is 1
console.log(i); // result 1

let b = 0;

// Postfix increment (i++) increments, but returns the old value (i.e. the value before the increment).
console.log(b++, 'Postfix increment'); //result 0
console.log(b) // result 1

function getDrinkByProfession(param){
  param = param.toLowerCase();
  switch (param) {
    case "jabroni":
      return "Patron Tequila"
    case "school counselor":
      return "Anything with Alcohol"
    case "programmer":
      return 	"Hipster Craft Beer"
    case "bike gang member":
      return "Moonshine"
    case "politician":
      return "Your tax dollars"
    case "rapper":
      return "Cristal"
    default:
      return "Beer"
  }
}

// Default works as else in IF Statement
// console.log(getDrinkByProfession("jabrOni"))
// console.log(getDrinkByProfession("pundit"))
// console.log(getDrinkByProfession("rapper"))

function openOrSenior(data){
  // combine into one level without nesting
  let result = [].concat.apply([], data)
  return result.map((el) => el)
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))