/*
    4. Write a program in javascript to find the factorial of all prime numbers between a
    given range . Range will be passed as 2 values in the function
    parameters. eg- if it is needed to find the values for numbers 1-100, then
    function declaration can look like - function prime(1,100).
*/

function primeFactorial(start, end) {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    }

    function factorial(num) {
        if (num === 1) return 1;
        return num * factorial(num - 1);
    }

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) console.log(`${i}! = ${factorial(i)}`);
    }
}

primeFactorial(1, 100);
