'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _exportedClass = require('./exported-class');

var _exportedClass2 = _interopRequireDefault(_exportedClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function Movie() {
    this.name = "";
};

Movie.prototype.setName = function (name) {
    this.name = name;
    console.log(this.name);
};

var movie = new Movie();
movie.setName("K.G.F.");

/***** ES6 */

var MovieES6 = function () {
    function MovieES6() {
        _classCallCheck(this, MovieES6);

        this.name = "";
    }

    _createClass(MovieES6, [{
        key: 'setName',
        value: function setName(name) {
            this.name = name;
            console.log("Class: ", this.name);
        }
    }]);

    return MovieES6;
}();

var movieEs6 = new MovieES6();
movieEs6.setName("K.G.F.");

var testClass = new _exportedClass2.default();
console.log(_exportedClass.TEST_VAR);
testClass.test();

var movie2ES6 = new _exportedClass.Movie2ES6();
console.log(movie2ES6);
movie2ES6.setTitle("Avatar");