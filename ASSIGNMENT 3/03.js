/*
    3. Write a program to find whether a given number is special number or
    not-
    If the sum of the factorial of digits of a number (N) is equal to the
    number itself, the number (N) is called a special number.
    eg- 145 is a special number
    Logic- 1! + 4! + 5 != 1+24+120 i.e 145
*/

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

function isSpecialNumber(num) {
    let originalNum = num;
    let result = 0;
    while (num !== 0) {
        let rem = num % 10;
        result += factorial(rem);
        num = (num - rem) / 10;
    }
    return result === originalNum;
}

console.log(isSpecialNumber(145)); // true