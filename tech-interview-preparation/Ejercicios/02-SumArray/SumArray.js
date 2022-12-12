function SumArray(arr, n) {
  // Your code here:
  return resolve1(arr, n) && resolve2(arr, n) && resolve3(arr, n);

  function resolve1(arr, n) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === n) return true;
      }
    }
    return false;
  }

  function resolve2(arr, n) {
    arr.sort((a, b) => a - b);
    let min = 0,
      max = arr.length - 1;
    while (min < max) {
      let sum = arr[min] + arr[max];
      if (sum === n) return true;
      (sum < n) ? min++ : max--;
    }
    return false;
  }

  function resolve3(arr, n) {
    return arr.reduce((subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
    ), [[]])
      .filter(subsets => subsets.length === 2)
      .map(set => set.reduce((acc, cur) => acc + cur, 0))
      .filter(sum => sum === n).length > 0;
  }
  
}

module.exports = SumArray