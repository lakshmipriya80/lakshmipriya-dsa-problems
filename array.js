// find max value
let a = [ 3, 3, 6, 8, 123, 345];
let max = a[0];
for(let i = 1; i<a.length; i++){

if(max < a[i]){
  max = a[i];
}
}
console.log(max);