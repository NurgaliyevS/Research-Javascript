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

console.log(lenArray)