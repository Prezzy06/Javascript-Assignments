/*
    3. Write a JavaScript program to find the sum of the multiples of 3 and 5
    under 1000
*/

function sumOfMultiples(limit) {
    let sum = 0;
    for (let i = 3; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}

console.log(sumOfMultiples(1000));