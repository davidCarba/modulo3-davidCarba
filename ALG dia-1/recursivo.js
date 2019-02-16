function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let total = factorial(64);
console.log(total);

function range(x, y) {
  if (y - x == 2) {
    return [x + 1];
  } else {
    let list = range(x, y - 1);
    console.log(list);
    list.push(y - 1);
    return list;
  }
}
console.log(range(2, 7));
