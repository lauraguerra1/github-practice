

// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Welcome to the website!";
}

console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Welcome to the Website, ${name}!`;
}

console.log(customGreeting("Laura"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    var fullName = [first, middle, last].join(" ");
    return `Welcome to the website, ${fullName}!`;
}

console.log(greetPerson("Laura", "Garcia", "Guerra"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return num * num;
}

function squareRoot(num) {
    return Math.sqrt(num);
}

console.log(`5 squared is equal to ${square(5)}, and the square root of 25 is equal to ${squareRoot(25)}.`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if (!quantity) {
        return `${item} - OUT of stock!`;
    } else if (quantity < 4) {
        return `${item} - running LOW`;
    } else {
        return `${item} is stocked`;
    }
}
console.log(checkStock(4, "Coffee")); 
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"