// let n = 3;

// let arr = Array(n);

// arr[0] = "4 6 -1".split(" ").map(arrTemp => parseInt(arrTemp, 10));
// arr[1] = "7 2 4".split(" ").map(arrTemp => parseInt(arrTemp, 10));
// arr[2] = "10 4 3".split(" ").map(arrTemp => parseInt(arrTemp, 10));

// const result = diagonalDifference(arr);
// console.log(result);

// function diagonalDifference(arr) {
//   var total = 0;
//   var diagonal1 = 0;
//   var diagonal2 = 0;
//   for (let fila = 0; fila < Array.length; fila++) {
//     const todalafila = arr[fila];
//     for (let columna = 0; columna < todalafila; columna++) {
//       var valor = todalafila[columna];
//       if (fila == columna) {
//         diagonal1 = diagonal1 + valor;
//       }
//       if (fila + columna == arr.length - 1) {
//         diagonal2 = diagonal2 + valor;
//       }
//     }
//   }

//   total = diagonal1 - diagonal2;
//   return total;
// }
