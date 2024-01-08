/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The average of the numbers in the array. Returns NaN if the input is not an array or the array is empty.
 */
function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return NaN;
  let sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

export default calculateAverage;
