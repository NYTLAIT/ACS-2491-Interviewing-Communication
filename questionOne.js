function missingMultiple(nums, k) {
  /**
   * Takes an array and an integer and returns the smallest
   * missing multiple of k with constraints:
   * 1 <= nums.length <= 100
   * 1 <= nums[i] <= 100
   * 1 <= k <= 100
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
  */
  for (let m = 1, n = k; n <= 100; m++, n = m * k) {
    // The multiplier (m) starts at 1 and increases by one each loop
    // The multiple (n) starts as k and moves to the next smallest multiple each loop
    if (!nums.includes(n)) {
      // If the multiple (n) is not in nums array, return the multiple
      return n
    }
  }
  console.log('No missing multiple found')
  return
}