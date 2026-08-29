"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 90;
a = "Hello";
console.log(a); // It only accept number data type because of Inference.
let b = 100;
b = "Namaste";
console.log(b); //It only accept string data type because of annotation
let sum = (a, b) => {
    //it get to know which value it get in argument
    return a + b;
};
console.log(sum(5, 10));
let sum1 = (a) => (b) => {
    if (b !== undefined)
        return sum1(a + b);
    return a;
};
let res = sum1(5)(10)();
console.log(res);
let employe = {
    name: "Amit",
    age: 23,
    role: "Software Developer",
    company: "Sheriyans Coding School",
    address: {
        locality: "Sector-24 ,B-Block",
        city: "Noida",
    }
};
console.log(employe);
//# sourceMappingURL=index.js.map