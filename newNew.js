function test() {
    this.name = "random";
    this.print = function () {
        console.log(this.name);
    }
    return this;
}
function newNew(obj) {
    var a = Object.create(obj.prototype);
    var b = obj.bind(a);
    return b();
}

var c  = newNew(test);

//a.print();
console.log(c.print());
console.log(c);