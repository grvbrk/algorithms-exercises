/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const first = mergeSort(nums.slice(0, mid));
  const second = mergeSort(nums.slice(mid));

  return merge(first, second);
};

function merge(first, second) {
  const sortedArray = [];
  while (first.length && second.length) {
    if (first[0] <= second[0]) {
      sortedArray.push(first.shift());
    } else {
      sortedArray.push(second.shift());
    }
  }

  return sortedArray.concat(first, second);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
