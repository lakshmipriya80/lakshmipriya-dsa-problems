//**
// let n = 15;
// let m = 5;

// // Write code to print 
// if n is a multiple of m 
// or n is not a multiple of m

// For the sample input put it should print

//  15 is a multiple of 5
 
//  hint: 12%3 gives 0.




/**
Write code to print if n is a prime Number

for example if n = 11, then its divisible only by 1 and 11 
(Hint: only n%1 == 0 and n%11==0,  ) no other number can divide 11

but if n = 12 then n%1 ==0 and n%2==0, n%3 == 0, n%4 == 0, n%6==0 hence its not a prime number

Your code should work for any value of n
*/

/**
*
Try this if you are comfortable with linear search.

int a[] = [13, 11, 13,4, 10, 9, 1];
int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found
*/


//**
// let n = 15;
// let m = 5;

// // Write code to print 
// if n is a multiple of m 
// or n is not a multiple of m

// For the sample input put it should print

//  15 is a multiple of 5
 
//  hint: 12%3 gives 0.

// let ans = n%m;
let n = 15;
let m = 5;
let answer =  "n is a multiple of 5";
let ans = " n is not a multiple of m";

// n%m == 0;

if(match = true){
n % m == 0;
console.log(answer);

}
else{
//    n % m != 0;
   console.log(ans);

}

/**
Write code to print if n is a prime Number

for example if n = 11, then its divisible only by 1 and 11 
(Hint: only n%1 == 0 and n%11==0,  ) no other number can divide 11

but if n = 12 then n%1 ==0 and n%2==0, n%3 == 0, n%4 == 0, n%6==0 hence its not a prime number

Your code should work for any value of n
*/


let q = 111;

let prime = q+"is prime number"
let notprime = q+"is not a prime"
if (q%1 == 0 & 1%q==0 ){

    console.log(prime)
}
else{

console .log(notprime)
}


/**
*
Try this if you are comfortable with linear search.

int a[] = [13, 11, 13,4, 10, 9, 1];
int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found
*/

let a = [13, 11, 13,4, 10, 9, 1];
let b = [11, 13, 4, 17];
let count = 0;
let time = b+"is 1 time";
let times = b+"is"+count+"times";
let notfount = b+" a is not found";
//  for(let i=0; i<a.length; i++){
    
// if(a===b[i]){
//   count=count+1

//   console.log("time");
// }
// if (count > 1){
// console.log(times);
// }
// else{

//     console.log(notfount);
// }
for(let i=0; i<a.length; i++){

if(b===a[i]){
console.log(time);

}
if(b !=a[i]){

}

}

 





