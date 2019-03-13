"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TEST_VAR = exports.TEST_VAR = 5;

var var1 = exports.var1 = 5;
var var3 = exports.var3 = 10;

var TestClass = function () {
    function TestClass() {
        _classCallCheck(this, TestClass);
    }

    _createClass(TestClass, [{
        key: "test",
        value: function test() {
            console.log("This method is from exported class");
        }
    }]);

    return TestClass;
}();

exports.default = TestClass;

var Movie2ES6 = exports.Movie2ES6 = function () {
    function Movie2ES6() {
        _classCallCheck(this, Movie2ES6);

        this.title = "";
    }

    _createClass(Movie2ES6, [{
        key: "setTitle",
        value: function setTitle(title) {
            this.title = title;
            console.log("Movie2ES6: ", this.title);
        }
    }]);

    return Movie2ES6;
}();