let n = 4;
// first half diamond function
for (let i = 1; i <= n; i++) {
  console.log(first(n - i) + firstsequence(i) + firstSecondsequence(i - 1));
}
// second half diamond function
for (let i = 1; i < n; i++) {
  console.log(first(i) + firstsequence(n - i) + firstSecondsequence(n - i - 1));
}
// spaces function
function first(n) {
  let getSpacesFirst = "";
  for (let i = 1; i <= n; i++) {s
    getSpacesFirst += "  ";
  }
  return getSpacesFirst;
}
// normal number sequences
function firstsequence(n) {
  let getfirstHalfsequence = "";
  for (let i = 1; i <= n; i++) {
    getfirstHalfsequence += i + " ";
  }
  return getfirstHalfsequence;
}
function firstSecondsequence(n) {
  let getfirstHalfsequence = "";
  for (let i = 1; i <= n; i++) {
    getfirstHalfsequence = i + " " + getfirstHalfsequence;
  }
  return getfirstHalfsequence;
}
//
//
//
// let n = 2;
// for (let i = 1; i < n; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n; i++) {
//   console.log(number(n) + first(n) + number(n));
// }
// for (let i = 1; i < n; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n; i++) {
//   console.log(spaces(n) + first(n));
// }
// function first(n) {
//   for (let i = 1; i < n; i++) {
//     let run = i + " ";
//     return run;
//   }
// }
// function number(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += "2 ";
//   }
//   return str;
// }
// function spaces(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += "  ";
//   }
//   return str;
// }
// //
// //
// //
// let n = 3;
// for (let i = 1; i < n - 1; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n - 1; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n - 1; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n - 1; i++) {
//   console.log(number(n) + first(n) + number(n));
// }
// for (let i = 1; i < n - 1; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n - 1; i++) {
//   console.log(spaces(n) + first(n));
// }
// for (let i = 1; i < n - 1; i++) {
//   console.log(spaces(n) + first(n));
// }
// function first(n) {
//   for (let i = 1; i < n; i++) {
//     let run = i + " ";
//     return run;
//   }
// }
// function number(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += "3 ";
//   }
//   return str;
// }
// function spaces(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str += "  ";
//   }
//   return str;
// }