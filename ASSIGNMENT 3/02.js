/*
    2. Write a program to find whether a given number is armstrong number or
    not-
    The Armstrong number is a number that is equal to the sum of cubes of
    its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
    numbers.
*/

function isArmstrongNumber(num) {
    let originalNum = num;
    let result = 0;
    let n = num.toString().length;
    while (num !== 0) {
        let rem = num % 10;
        result += Math.pow(rem, n);
        num = (num - rem) / 10;
    }
    return result === originalNum;
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(371)); // true
console.log(isArmstrongNumber(407)); // true

