/*
    1. Using for loops, write a Javascript program to output the following
    pattern -
    1  
    2 3
    4 5 6
    7 8 9 10
*/

let num = 1;
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += `${num} `;
        num++;
    }
    console.log(row);
}
