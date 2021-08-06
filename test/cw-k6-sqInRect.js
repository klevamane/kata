/*

The drawing below gives an idea of how to cut a given "true" rectangle 
into squares ("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; 
  Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

Examples in general form:
(depending on the language)


 sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  

*/

const sqInRect = (lgt, width) => {
  if (lgt === width) return undefined;

  let response = [];
  while (lgt && width) {
    response.push(Math.min(lgt, width));
    if (lgt >= width) {
      lgt -= width;
    } else {
      width -= lgt;
    }
  }
  return response;
};

console.log(sqInRect(5, 3));
