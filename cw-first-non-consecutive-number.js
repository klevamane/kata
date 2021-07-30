/**
 * find the first non consecutive number
 * it can be +ve or -ve
 * the passed in array must be at least of length 2
 * it is expected that the numbers will be unique
 */
 const fisrtNoneConsecutive = (arr) => {
  // check that array length >= 2
  if(arr.length < 2) throw new Error("Input should have at least 2 numbers");
  // for(i=1; i<= arr.length; i++) {
  //   if(Math.abs(arr[i] - arr[i+1]) !== 1) return arr[i]
  // }
   for(i=0; i<arr.length-1; i++) {
    let current = arr[i]
    let next = arr[i+1]
    if (current + 1 !== next) return next
  }
  // return null if the whole array is consecutive
  //array must be at least of length 2

  return null;

}

console.log(fisrtNoneConsecutive([-2,-1, 0, 2]))