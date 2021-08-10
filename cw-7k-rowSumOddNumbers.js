/*

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

*/

const rowSumOddNumbers = (lineNumber) => {
  // in order to get the sum of the rows
  // in the triangle we just need to multiply to the power of the line number
 return Math.pow(lineNumber, 3)
}