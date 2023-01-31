// 1. Write a program to find whether a given year is a leap year or not.

function isLeapYear(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        return true;
    }
    return false;
}

let year = 2023;
console.log(isLeapYear(year));
