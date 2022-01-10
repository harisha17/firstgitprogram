"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(i, n, s) {
        this.stdID = 21261;
        this.stdName = "harisha";
        this.stdSal = 25000;
        this.stdID = i;
        this.stdName = n;
        this.stdSal = s;
    }
    Student.prototype.display = function () {
        console.log(this.stdID);
        console.log(this.stdName);
        console.log(this.stdSal);
    };
    return Student;
}());
exports.Student = Student;
var e1 = new Student(21261, "harisha", 2600);
e1.display();
