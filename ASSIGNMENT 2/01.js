/*
	1. Write a Javascript function to check whether a triangle is equilateral,
	isosceles or scalene
*/

function triangleType(a, b, c) {
	if (a === b && b === c) return "Equilateral";
	if (a === b || b === c || a === c) return "Isosceles";
	return "Scalene";
}

let a = 5
let b = 7
let c = 6
console.log(triangleType(a, b, c));