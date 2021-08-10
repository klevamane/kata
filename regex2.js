let abc = "";

console.log(/([a-z]{1}[A-Z]{1}[0-9]{1}){6}/.test("1aDsdewewewewe342323sd"));
console.log(/((a-z)+(A-Z)+\d+){6,}$/.test("ab23dsdDS"));
console.log(/[a-z]+/g.test("skdmsd"));

//  console.log(abc.match(/\s/g))
// if(abc.search(/\s/g) === - 1) return true

// console.log(RegExp)
let regex = /^[a-zA-Z0-9]+$/;

console.log(regex.test(abc));

console.log(abc.match(/|[^+] $/g));
//  if(abc.match(/[A-Za-z]/g))
// console.log(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/g.test(abc))
console.log(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-Z0-9]{6,}$/.test(abc));

console.log("");
