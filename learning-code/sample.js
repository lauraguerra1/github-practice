//Start with an array of strings. Print only the words that start with the letter s.
//Define an array of strings, Words that start with "S" are to be printed. 
//Data types: strings, array
//Qs: N/A
// Breakdown: 
// - define an array of strings
// - loop through the array 
// - check if each element starts with "S"
//      - If true, print to console
//      - If false, do nothing 
var words = ["salsa", "tortilla", "Sauce", "pasta"]; 

for (var i = 0; i < words.length; i++) {
    var capWords = words[i].replaceAll("t", "T"); 
    console.log(capWords);
}

var students = ["Jason","Laura","Hollis","Trevor"];
students.sort();
for (var i = 0; i < students.length; i++) {
    console.log (`${[i + 1]}. ${students[i]}`)
}





var nums = [4,2,4,2,8,5,9,8,0,3]
function getPhoneNum() {
    var phoneNum = ``
    for (var i = 0; i < nums.length; i++) {
        if (i === 3 || i === 6) {
            phoneNum += `-`
        }
        phoneNum += nums[i];
    }
    return `${phoneNum}`;
}

console.log(getPhoneNum());

var nums = [3,1,0,7,7,0,6,0,0,9]
function getSimpleNum() {
    return `${nums[0]}${nums[1]}${nums[2]}-${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
}

console.log(getSimpleNum());
// console.log(getPhoneNum());

console.log("Tattoo".replace(/t/g, ("T"))); 
// ==> TaTToo
console.log("Tattoo".replaceAll("t", "T")); 
// ==> TaTToo
















