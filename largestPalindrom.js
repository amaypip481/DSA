function largestPalindrom(num1, num2, memo = {}){

let x = num1*num2;

if(num1<= 99 || num2 <= 99) return 0;

let key = `${num2}-${num1}`;
if(key in memo) return memo[key];

if(checkPalindrom(x)) return x;

let y = largestPalindrom(num1-1, num2, memo);
let w = largestPalindrom(num1, num2-1, memo);
if(w>y)  y = w;
memo[key] = y;
   return memo[key];



}

function checkPalindrom(num){
    let str = num.toString();
    return str === str.split('').reverse().join(''); // Check if the number is a palindrome
}

console.log(largestPalindrom(999,999));