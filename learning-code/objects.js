var tweet1 = {
    userHandle: "@MechEngSanchez",
    userName: "Leirá Sanchez⚡️",
    time: "7:06 am",
    date: "Jan 25, 2022",
    likes: 21,
    tweetContent: "My M1 Macbook Pro arrived 🤓"
};
console.log(tweet1.date);
console.log(Object.keys(tweet1));
console.log(Object.values(tweet1));

console.log("=============================================");

var zoo = {
    giraffes: 3,
    zebras: 12,
    hippos: 2
};
console.log(Object.keys(zoo));
console.log(Object.values(zoo));
console.log(zoo.giraffes);
zoo.monkeys = 5
console.log(zoo.monkeys);
zoo.whales = 7
console.log(Object.keys(zoo));

console.log("-----------------------------------------------")
var person = {
    name: "Laura",
    age: 23,
    ethnicity: "Latino",
    countryOfOrigin: "Brazil",
    multiLingual: true
}

console.log(person);
console.log(person.multiLingual);

person.school = "Turing";
person.career = "Software Developer";

console.log(Object.keys(person));

console.log("---------------------------------------------------------")

var numbers = [2, 7, 5, 42, 29, 78, 94, 1]

function isOver30() {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 30) {
            console.log(numbers[i]);
        }
    }
}
isOver30();

function isUnder60 () {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 60) {
            console.log(numbers[i]);
        }
    }
}

isUnder60();