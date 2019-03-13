'use strict';

//Without parameters
(function () {
    return 5;
});

//With parameters
(function (number) {
    return number * 2;
});

//Multiple parameters
(function (num1, num2) {
    return num1 + num2;
});

//Multiple lines of statements within arrow function
(function (num1, num2) {
    var x = num1 + num2;
    return x;
});

var arr = ['John', 'Mike', 'Smith', 'Trump', 'William', 'Tom', 'Thomas'];

var arr2 = arr.map(function (name) {
    return "name is " + name;
});
console.log(arr2); //["name is John", "name is Mike", "name is Smith", "name is Trump", "name is William", "name is Tom", "name is Thomas"]