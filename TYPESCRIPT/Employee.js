"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(i, n, s) {
        this.empID = 123;
        this.empName = "shailaja";
        this.empSal = 21254;
        this.empID = i;
        this.empName = n;
        this.empSal = s;
    }
    Employee.prototype.display = function () {
        console.log(this.empID);
        console.log(this.empName);
        console.log(this.empSal);
    };
    return Employee;
}());
exports.Employee = Employee;
var e1 = new Employee(124, "Harisha", 21261);
e1.display();
