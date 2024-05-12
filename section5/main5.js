// Write a JavaScript function maxSumOfConsecutive that takes two parameters: an array of integers array and a positive integer groupSize. The function should return the maximum sum of groupSize consecutive integers in the array. If the array is empty or groupSize is greater than the array length, the function should return null. Implement the function to have a time complexity of 𝑂(𝑛)

// For example, given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and groupSize of 3, the function should return 27, which is the sum of the consecutive integers 8, 9, and 10.

// Write the maxSumOfConsecutive function to achieve this.

function maxSumOfConsecutive(array, groupSize) {
  if (groupSize > array.length) return null;

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < groupSize; i++) {
    currentSum += array[i];
  }

  maxSum = currentSum;

  for (let i = groupSize; i < array.length; i++) {
    currentSum = currentSum - array[i - groupSize] + array[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSumOfConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
