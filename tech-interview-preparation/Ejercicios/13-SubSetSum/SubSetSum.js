function subsetSum(nums, n) {
  // Your code here:
  function solve1() {
    const sums = [0];
    for (const num of nums) {
      const copySums = [...sums];
      for (const sum of copySums) {
        const currentSum = num + sum;
        if (currentSum === n) return true;
        sums.push(currentSum);
      }
    }
    return false;
  }

  function solve2() {
    const sums = new Set([0]);
    for (const num of nums) {
      const copySums = [...sums];
      for (const sum of copySums) {
        const currentSum = num + sum;
        if (currentSum === n) return true;
        if (currentSum < n) sums.add(currentSum);
      }
    }
    return false;
  }

  return solve2();

}
console.log(
  subsetSum([1, 10, 5, 3], 9)// output: true <= 1 + 5 + 3
)
console.log(
  subsetSum([1, 10, 5, 3], 19)// output:true <= add all 4
)
console.log(
  subsetSum([1, 10, 5, 3], 17)// output:false
)
console.log(
  subsetSum([1, 10, 5, 3], 2)// output:false
)
console.log(
  subsetSum([1, 10, 5, 3], 10)// output:true <= 10 + 0 = 10
)
module.exports = subsetSum
