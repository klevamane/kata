const disappearedNumbers = (arr) => {

  // find the missing numbers as an array in a list
  // of array(numbers) of length n
  // the highest number in the array even though
  // missing must be the size (length) of the array
  // and the smallest number even though missing must be 1
  // ie 1<= arr[numbers] <= length(arr)
  // eg [1, 5, 2, 2, 2]
  // missing will be [2,4]

  // steps
  // do not sort the array else it might become nlog(n) time complexity
  // get the length of the array
  // const len = arr.length()
  let newArr = [...Array(arr.length).keys()].map((curr, inx) => inx + 1)
  return newArr.filter(el => !arr.includes(el))
  // remove duplicates
}

console.log(disappearedNumbers([1, 1, 2, 2, 2]))