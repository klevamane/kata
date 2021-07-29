const reverseString = (str) => {
  // get the length of the string and loop backwards
  // to greater than or equal to zero
  let reversedString = '';
  for(i = str.length - 1; i >=0; i--) {
    reversedString +=str[i]
  }
  return reversedString;
}

console.log(reverseString("car"))
console.log(reverseString("people"))
console.log(reverseString("madam"))

const reverseString2 = (str) => {
  // convert the string to an array by split
  let arrayOfStrings = str.split("");
  // reverse the array since a string doesn't
  // have a reverse method, but an array does
  arrayOfStrings.reverse()
  // convert the array back to a string by joining
  return arrayOfStrings.join("")
}

console.log("****** Second Method ******")
console.log(reverseString2("car"))
console.log(reverseString2("people"))
console.log(reverseString2("madam"))


const reverseString3 = (str) => {
  return str.split("").reverse().join("")
}

console.log("****** Third Method ******")
console.log(reverseString3("car"))
console.log(reverseString3("people"))
console.log(reverseString3("madam"))

