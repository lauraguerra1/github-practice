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