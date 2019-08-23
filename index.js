// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Marh.random() * 100 + 2).toString() + "${array[index]}s!!!";
}

var animals = ["dog", "cat", "squirrel"];

console.log(animals);