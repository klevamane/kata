// // let str = 'welcome'

// // create for loop
// // get the first element
// // get the remaining elements
// // let result = []
// // for (i=0; i<str.length; i++) {
// //   let currentChar = str[i]
// //   let remainingChar = str.slice(i+1)

// //   for(j=0; j<remainingChar; j++) {
// //     result = currentChar +
// //   }
// // }

// function findPerm(str) {
//   if (str.length === 0) return "";
//   if (str.length === 1) return str;
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];
//     const remainingChar = str.slice(0, i) + str.slice(i + 1);

//     for (let j = 0; j < remainingChar.length; j++) {
//       result.push(currentChar + findPerm(remainingChar)[j]);
//     }
//   }
//   return result;
// }

function findPerms(str) {
  str = String(str);
  if (str.length === 0) return "";
  if (str.length === 1) return str;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < remainingChars.length; j++) {
      result.push(currentChar + findPerms(remainingChars)[j]);
    }
  }
}

//   return result;
// }
// console.log(findPerm("12").sort((a, b) => a + b));
// console.log(findPerms("ab"));

// let ss = "welcome";
// console.log(ss.slice(0, 0));

// let arry = [1, 7, 5, 21, 4, 42, 3, 53, 5];
// console.log(arry.sort((a, b) => a - b));

// function nextBigger(n) {
//   n = String(n);
//   // if all strings are the same reutrn -1
//   let isSameStrings = false;
//   for (i = 0; i < n.length - 1; i++) {
//     if (n[i] === n[i + 1]) {
//       isSameStrings = true;
//     } else {
//       isSameStrings = false;
//       break;
//     }
//   }
//   if (isSameStrings) return -1;

//   if (n.length === 1) return -1;

//   let response = [];
//   for (i = 0; i < n.length; i++) {
//     let currentChar = n[i];
//     let remainingChars = n.slice(0, i) + n.slice(i + 1);

//     for (j = 0; j < remainingChars.length; j++) {
//       response.push(currentChar + findPerms(remainingChars)[j]);
//     }
//   }
//   response = response.sort((a, b) => a - b);
//   response;
//   const requiredIndex = response.findIndex((number) => number > n);
//   if (requiredIndex !== -1) {
//     return response[requiredIndex];
//   }
//   return -1;

//   // if(response[requiredIndex] === n && response.length > 3) {
//   //   response
//   //   return response[requiredIndex + 1]
//   // }
//   // [].findIndex
//   // return response[requiredIndex] ? response[requiredIndex]: -1;
// }

// console.log(nextBigger());

// console.log(Boolean(1 == 1));

// function nextBigger(n) {
//   n = String(n);
//   // if all strings are the same reutrn -1
//   let isSameStrings = false;
//   for (i = 0; i < n.length - 1; i++) {
//     if (n[i] === n[i + 1]) {
//       isSameStrings = true;
//     } else {
//       isSameStrings = false;
//       break;
//     }
//   }
//   if (isSameStrings) return -1;

//   if (n.length === 1) return -1;

//   let response = [];
//   for (i = 0; i < n.length; i++) {
//     let currentChar = n[i];
//     let remainingChars = n.slice(0, i) + n.slice(i + 1);

//     for (j = 0; j < remainingChars.length; j++) {
//       response.push(currentChar + nextBigger(remainingChars)[j]);
//     }
//   }
//   response = response.sort((a, b) => a - b);
//   const requiredIndex = response.findIndex((number) => number > n);
//   if (requiredIndex !== -1) {
//     return response[requiredIndex];
//   }
//   return -1;
// }

// console.log(1)
// function nextBigger(n) {
//   n = String(n);
//   // if all strings are the same reutrn -1
//   let isSameStrings = false;
//   for (i = 0; i < n.length - 1; i++) {
//     if (n[i] === n[i + 1]) {
//       isSameStrings = true;
//     } else {
//       isSameStrings = false;
//       break;
//     }
//   }
//   if (isSameStrings) return -1;

//   if (n.length === 1) return -1;

//   let response = [];
//   for (i = 0; i < n.length; i++) {
//     let currentChar = n[i];
//     let remainingChars = n.slice(0, i) + n.slice(i + 1);

//     for (j = 0; j < remainingChars.length; j++) {
//       response.push(currentChar + nextBigger(remainingChars)[j]);
//     }
//   }
//   response = response.sort((a, b) => a - b);
//   const requiredIndex = response.findIndex((number) => number > n);
//   if (requiredIndex !== -1) {
//     return response[requiredIndex];
//   }
//   return -1;
// }
// console.log(123);
// console.log(nextBigger(12));

// console.log(1)

function nextBigger3(n) {
  n = String(n);

  // also if all digits are in descending other we need to return -1
  // return -1 if the string is descending, here we cannot find a result
  const newN = n.split("");
  const isDescending = newN.every((current, index) => {
    return index === 0 || parseInt(current) <= newN[index - 1];
  });
  if (isDescending) return -1;

  const isAscending = newN.every((current, index) => {
    return index === 0 || parseInt(current) > newN[index - 1];
  });

  if (isAscending && newN[index - 1] !== newN[index - 2]) {
    // swap
    const last = newN[index - 1];
    newN[index - 1] = newN[index - 2];
    newN[index - 2] = last;
    return newN.join("");
  }
  // we need to process the number from the right hand side
  // transverse across but backwords from right to left
  // looking for the first number smaller than it's
  // immediate right number
  let medianKeyPosition;
  for (i = n.length - 1; i > 0; i++) {
    if (n[i - 1] < n[i]) {
      // get position
      medianKeyPosition = i - 1;
      break;
      // 3765
    }
  }
  medianKeyPosition;
  if (medianKeyPosition >= 0) {
    medianKeyPosition;
    let beforeMedianKey = n.slice(0, medianKeyPosition);
    // half after the key position

    let afterMedianKey = n.slice(medianKeyPosition + 1);

    const minimumDigitAfterMedian = Math.min(...afterMedianKey);

    // console.log(secondHalf.split('').findIndex(value => value == minimumDigitAfterMedian))

    // should be loosely equal to because of string and number comparison
    // find the smallest digit after the median key and swap it with the median key
    const swapIndexAfterMedianKey = afterMedianKey
      .split("")
      .findIndex((value) => value == minimumDigitAfterMedian);
    const rightSwapValue = afterMedianKey[swapIndexAfterMedianKey];
    const medianValue = n[medianKeyPosition];
    medianKeyPosition;
    n = n.split("");
    n[medianKeyPosition] = rightSwapValue;
    n;
    afterMedianKey = afterMedianKey.split("");
    afterMedianKey[swapIndexAfterMedianKey] = medianValue;
    n = n.join("").slice(0, medianKeyPosition + 1) + afterMedianKey;
    n;

    // 12341

    return n;
  }
  return -1;
}

