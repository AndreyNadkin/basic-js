const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   let arrN = n.toString().split('');
//   let min = arrN[0];
//   // const min = Math.min.apply(null, arrN);
//   // 
//   for (let i = 0; i < arrN.length; i++) {
//     if (arrN[i] < min) {
//       min = arrN[i];
//     }
//   }
//   let res = (arrN.slice(0,min) + arrN.slice(min - 1, arrN.length)).join('');
//   return +res;
  const nStr = n.toString();
  let max = -Infinity;
  for (let i = 0; i < nStr.length; i++) {
    const resString = nStr.slice(0, i) + nStr.slice(i + 1);
    const res = parseInt(resString, 10);
    if (res > max) {
      max = res;
    }
  }
  return max;
}



module.exports = {
  deleteDigit
};
