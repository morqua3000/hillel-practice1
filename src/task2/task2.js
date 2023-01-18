/**
 *
 * Given an array of integers of any length, return an array
 * that has 1 added to the value represented by the array.
 * the array can't be empty
 * only non-negative, single digit integers are allowed
 * Return null (or your language's equivalent) for invalid inputs.
 *
 * Examples
 *
 * Valid arrays
 * [4, 3, 2, 5] would return [4, 3, 2, 6]
 * [1, 2, 3, 9] would return [1, 2, 4, 0]
 * [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
 * [0, 1, 3, 7] would return [0, 1, 3, 8]
 * [0, 1, -3, 7] would return null
 * [] would return null
 *
 * Invalid arrays
 *
 * [1, -9] is invalid because -9 is not a non-negative integer
 * [1, 2, 33] is invalid because 33 is not a single-digit integer
 *
 * @param {Array} arr
 *
 * @return {Array}
*/

function plusOneArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const lastIndex = arr.length;
  for (let i = 0; i < lastIndex; i++) {
    if (typeof arr[i] === 'string'
         || Number.isNaN(arr[i])
         || arr[i] < 0
         || arr[i] >= 10) {
      return null;
    }
  }
  if (arr[0] !== 0) {
    const newArr = +arr.join('') + 1;

    return Array.from(String(newArr), Number);
  }
  // не могу придумать как реализовать чтоб этот проходил [0, 1, 3, 7]
  // const newArr = [];
  // arr.forEach((element, index) => {
  //   if (index === lastIndex - 1) {
  //     element += 1;
  //   }
  //   newArr.push(element);
  // }); так не нравится

  return arr;
}

module.exports = plusOneArray;
