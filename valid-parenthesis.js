/**
 * @description checks that two successive strings
 * are valid parenthesis
 * @param {string} str 
 * @returns {boolean}
 */
const validParenthesis = (str) => {

  // check that two successive strings are
  // valid parenthesis


  // sample = ()[]
  // create a map to check the parenthesis match
  const validityMap = {
    '}': '{',
    '(': ')',
    '[': ']'
  }

  let stack = []
  for (char of str) {
    if(validityMap[char]) {
      stack.push(validityMap[char])
    }
    else {
      if (stack.pop() !== char) {
        return false
      }
    }
  }
  return true
}

console.log(validParenthesis('()()[]'))