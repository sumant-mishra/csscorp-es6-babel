var name = 'John';
var age = 25;

var sentence = "My name is " + name + " and age is " + age;

var sentenceTpl = `My name is ${name} and age is ${age}`;
console.log(sentence)
console.log(sentenceTpl);

var sentenceTpl = `My name is ${name} and age is ${age + 5}`;
console.log(sentenceTpl);