"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(i, n, s) {
        this.prdID = 123;
        this.prdName = "harisha";
        this.prdPrice = 25;
        this.prdID = i;
        this.prdName = n;
        this.prdPrice = s;
    }
    Product.prototype.display = function () {
        console.log(this.prdID);
        console.log(this.prdName);
        console.log(this.prdPrice);
    };
    return Product;
}());
exports.Product = Product;
function calculateAmount(prdPrice) {
    var totalPrice = prdPrice + (prdPrice * 0.18);
    return totalPrice;
}
var e1 = new Product(124, "Toys", 240);
var e2 = new Product(135, "Teady Bear", 250);
e1.display();
e2.display();
console.log(calculateAmount(230));
