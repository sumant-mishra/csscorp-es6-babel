var arr = [ 'John', 'Mike', 'Smith', 'Trump', 'William', 'Tom', 'Thomas' ];

//To push an element
arr.push('Kelly');
console.log(arr);

arr.pop();
console.log(arr);

//splice
var array=[1,2,3,4,5];
console.log("splice: ", arr.splice(4, 2));

//slice
var array2=[ 'John', 'Mike', 'Smith', 'Trump', 'William', 'Tom', 'Thomas' ];
console.log("slice: ", array2.slice(4, 2));

console.log("----after-----");
console.log(array);
console.log(array2);

var arr = [ 'John', 'Mike', 'Smith', 'Trump', 'William', 'Tom', 'Thomas' ];

arr.shift()
console.log("shift: ", arr);

arr.unshift("John");
console.log("unshift: ", arr);

var arr = [ 'John', 'Mike', 'Smith', 'Trump', 'William', 'Tom', 'Thomas' ];
for(var x in arr) {
    console.log(arr); //John Mike Smith Trump William Tom Thomas
}

for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

var obj = {name: "John", age: 22};
for(var x in obj) {
    console.log(x); // name age
    console.log(obj[x]); //John 22
}

for (let val of arr) {   
    console.log(val) //John Mike Smith Trump William Tom Thomas
 } 
