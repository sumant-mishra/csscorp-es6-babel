import {TEST_VAR} from './exported-class';
import TestClass from './exported-class';
import {Movie2ES6} from './exported-class';

var Movie = function(){
    this.name = "";
}

Movie.prototype.setName = function(name){
    this.name = name;
    console.log(this.name);
}

var movie = new Movie();
movie.setName("K.G.F.");


/***** ES6 */

class MovieES6 {
    constructor(){
        this.name = "";
    }
    setName(name){
        this.name = name;
        console.log("Class: ", this.name);
    }
}


var movieEs6 = new MovieES6();
movieEs6.setName("K.G.F.");


var testClass = new TestClass();
console.log(TEST_VAR);
testClass.test();


var movie2ES6 = new Movie2ES6();
console.log(movie2ES6);
movie2ES6.setTitle("Avatar");