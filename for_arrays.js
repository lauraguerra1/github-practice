var fruits = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
  console.log("I have some " + fruits[i]);
}

// console.log(fruits.length);

console.log("===============================")
// Print only the numbers from the following Array that are greater than 10:

var numbers = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      console.log(numbers[i]);
    }
}

console.log("===============================")
// Utilize a for statement to print out the numbers 3-14.

for (var i = 3; i <= 14; i++) {
  console.log(i);
}

console.log("===============================")
// Print the square of each number:

var numbers = [2, 4, 6, 8, 10, 12]

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] *= numbers[i]);
}

console.log("===============================")
// Print each String, but make each String all lowercase:

var words = ["sUnNy", "BeAcH", "wAvEs", "ReLaX"]

var lowercaseWords = words.map(words => words.toLowerCase());

for (var i = 0; i < words.length; i++) {
  console.log(lowercaseWords[i]);
}

console.log("===============================")
// Print out only names that begin with "P":

var names = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil"]

for (var i = 0; i < names.length; i++){
  if (names[i].startsWith("P")) {
    console.log(names[i])
  }
}

console.log("===============================")
// Print out every odd number between 0 and 100. Do NOT print any even numbers, and do NOT create an Array to help you do this.