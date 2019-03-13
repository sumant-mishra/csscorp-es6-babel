'use strict';

var names = ['John', 'Mike', 'Smith'];
var moreNames = ['William', 'Tom', 'Thomas'];

var allNames = [].concat(names, ['Trump'], moreNames);
console.log(allNames);