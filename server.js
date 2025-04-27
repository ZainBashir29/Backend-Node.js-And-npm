console.log("Hello world");

var slugify = require("slugify");

let a = slugify("some string");
console.log(a);

const b = slugify("some s$$%^&%*^tring", "_");
console.log(b);
