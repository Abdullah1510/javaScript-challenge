function func(name, fullName) {
    this.name = name;
    this.fullName = fullName;
    this.get = () => {
        return `hi abdullah ${this.fullName}`
    }
}

func.prototype.hi = function () {

}
// This is the function constructor in javaScript
// after introduncing es6 in class came into picture

let fun1 = new func('abd', "Abdullah Rahmin");
console.log(fun1.get());


// JavaScript coding challeneges

let task = {};
