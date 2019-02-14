var cars = ["Saab", "Volvo", "BMW"];
function printArray(arr) {
  arr.forEach(element => {
    console.log(element);
  });
}
function sortBubble(arr) {
  var changes = 0;
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr.length - 1; index2++) {
      if (arr[index2] > arr[index2 + 1]) {
        const element = arr[index2];
        arr[index2] = arr[index2 + 1];
        arr[index2 + 1] = element;
        changes++;
      }
    }
  }
  return changes;
}
var changes = sortBubble(cars);
//printArray(cars);
console.log(cars);
console.log("Changes ", changes);
