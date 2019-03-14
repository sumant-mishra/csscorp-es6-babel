"use strict";

function Test(param1, param2) {
    //This will throw error as param3 is undefined
    //console.log(param1, param2, param3);
}

Test("John", "Mike", "Tom");

//Incorrect syntax because rest params should be the last parameter in function
//function TestRest(param1, param2, ...args, param3)

function TestRest(param1, param2) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    console.log(args);
    console.log(param1, param2, args[0]);
}

TestRest("John", "Mike", "Tom", "Smith");