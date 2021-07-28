const stepsToZero = (num) => {
  requiredSteps = 0;
  
  // we can also check for the truthy value of number
  // while(num)
  while(num > 0) {
    num % 2 === 1 ? num-- : num = num / 2
    requiredSteps++;
  }
  return requiredSteps;
}

console.log(stepsToZero(2))
console.log(stepsToZero(1))
console.log(stepsToZero(3))
console.log(stepsToZero(14))