var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the elements of fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // First sort the elements of fruits
fruits.reverse(); // Then reverse the order of the elements
//Numeric Sort
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
  return a - b;
});
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
  return b - a;
});

//Sorting an Array in Random Order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {
  return 0.5 - Math.random();
});

//Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

// Math.max()
//Example
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

//Example
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

//Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//Example (Find Max)
function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

//Example (Find Min)
function myArrayMin(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

//Example
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
cars.sort(function(a, b) {
  return a.year - b.year;
});

cars.sort(function(a, b) {
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
