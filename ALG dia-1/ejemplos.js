//ejemplo1
//chequear si el string empieza por mayuscula

// function upper_case(str) {
//   regexp = /^[A-Z]/;
//   if (regexp.test(str)) {
//     console.log("String's first character is uppercase");
//   } else {
//     console.log("String's first character is not uppercase");
//   }
// }
// upper_case("Abcd");
// upper_case("abcd");
// upper_case("Kgdf");

//chequear que empiece por una letra

// function letter(str) {
//   regexp = /^[a-zA-Z]/;
//   if (regexp.test(str)) {
//     console.log("Acierta:" + str);
//   } else {
//     console.log("No acierta:" + str);
//   }
// }
// letter("Abcd");
// letter("abcd");
// letter("Kgdf");
// letter("4Kgdf");

//ejemplo2

// function is_creditCard(str) {
//   regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

//   if (regexp.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));

ejemplo3;

function valid_email(str) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(str)) {
    console.log("Valid email address!");
  } else {
    console.log("You have entered an invalid email address!");
  }
}

valid_email("me-info@example.com");

ejemplo4;

function count_words(str1) {
  //exclude  start and end white-space
  str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
  //convert 2 or more spaces to 1
  str1 = str1.replace(/[ ]{2,}/gi, " ");
  // exclude newline with a start spacing
  str1 = str1.replace(/\n /, "\n");
  console.log(str1.split(" ").length);
}
let frase = "Me encata   la    fruta  gratis";
count_words(frase);
