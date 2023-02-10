// Current day age calulator
console.log("HOW OLD ARE YOU?")

function getsAge(mm,dd,yyyy) {
var month = new Date().getMonth() + 1
var day = new Date().getDate()
var year = new Date().getFullYear()
  if (mm === month && dd <= day) {
    return year - yyyy;
  } else if (mm === month && dd > day) {
    return year - yyyy - 1;
  } else if (mm > month) {
    return year - yyyy - 1;
  } else if (mm < month) {
    return year - yyyy;
  }
}


var lauraAge = getsAge(09,18,1999);
var gregAge = getsAge(04,02,1989);

console.log(getsAge(02,10,1980));

console.log(`Laura, you have lived ${lauraAge} years of life!`)

console.log(`Greg, you have lived ${gregAge} years of life!`)

// var month = new Date().getMonth() + 1
// var day = new Date().getDate()
// var year = new Date().getFullYear()

// console.log(`${month}, ${day}, ${year}`)

console.log("=============================")
console.log("Turing Practice Age Calculator")
// only calculates by year, does not integrate months or days

function getAge(birthYear) {
  var curYear = 2023; 
  return curYear - birthYear;
}

var myAge = getAge(1999); 
var yourAge = getAge(1997);

console.log(`I have lived ${myAge} years of life!`)
console.log(`You have lived ${yourAge} years of life!`)
console.log(`They have lived ${getAge(2000)} years of life!`)