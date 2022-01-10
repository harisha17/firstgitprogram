var Arrayexample = /** @class */ (function () {
    function Arrayexample() {
        this.numarr = [1, 2, 3, 4];
    }
    Arrayexample.prototype.find = function () {
        for (this.i = 0; this.i < this.numarr.length; this.i = this.i + 1) {
            if (5 == this.numarr[this.i]) {
                console.log("number found");
            }
        }
    };
    return Arrayexample;
}());
var arr = new Arrayexample();
arr.find();
