"use strict";
//Generics
function Add(value) {
    return value;
}
let num = Add(10);
let str = Add("Hello World!");
console.log(num);
console.log(str);
console.log("\n");
function ADD(value1, value2) {
    return [value1, value2];
}
let res = ADD("Raiyan Sayeed", 23);
console.log(res);
console.log("\n");
//Class using Generics
class storage {
    constructor(value) {
        this.data = value;
    }
    getData() {
        return this.data;
    }
}
let myStorage = new storage(100);
console.log(myStorage.getData());
let myStorage2 = new storage("New inventory");
console.log(myStorage2.getData());
//# sourceMappingURL=Generic.js.map