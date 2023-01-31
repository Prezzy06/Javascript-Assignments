/*
    2. Write a JavaScript program to convert temperatures to and from Celsius,
    Fahrenheit.
    [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
    Fahrenheit ]
    Expected Output :
    60°C is 140 °F
    45°F is 7.222222222222222°C
*/

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let celsius = 60;
let fahrenheit = 140;

console.log(celsius + "°C is " + celsiusToFahrenheit(celsius) + "°F");
console.log(fahrenheit + "°F is " + fahrenheitToCelsius(fahrenheit) + "°C");
