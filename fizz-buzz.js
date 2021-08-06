// Return an array
function fizzBuzz(n) {
  let requiredArr = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) requiredArr.push("FizzBuzz");
    else if (i % 3 === 0) requiredArr.push("Fizz");
    else if (i % 5 === 0) requiredArr.push("Buzz");
    else requiredArr.push(i);
  }
  return requiredArr;
}

console.log(fizzBuzz(15));

// function fizzBuzz2(n) {
//   let requireArr = [...Array(n).keys()].map((current, ind) => ind+=1)
//   let str = requireArr.join("")
//   return str.replace(/\w/g, (match) => {
//     if(parseInt(match) % 3 ===0) {
//       return '*'
//     }
//     return match
// })
// }

// console.log(fizzBuzz2(10))

console.log([...Array(6).keys()].map((o, ind) => ind + 1));
