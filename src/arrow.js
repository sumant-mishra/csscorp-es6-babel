//Without parameters
()=>5;

//With parameters
(number) => number*2;

//Multiple parameters
(num1, num2) => num1 + num2;

//Multiple lines of statements within arrow function
(num1, num2) => {
    let x = num1 + num2;
    return x;
}

var arr = [ 'John', 'Mike', 'Smith', 'Trump', 'William', 'Tom', 'Thomas' ];

var arr2 = arr.map((name) => "name is " + name);
console.log(arr2) //["name is John", "name is Mike", "name is Smith", "name is Trump", "name is William", "name is Tom", "name is Thomas"]