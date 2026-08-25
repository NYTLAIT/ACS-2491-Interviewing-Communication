function isPalindrome(x) {
  /**
   * Takes an integer and returns true if palindrome and false if not
   * @param {number} x
   * @return {boolean}
   */
  // ----- NEGATIVE NUMBERS EARLY RETURN
  console.log('---- Starting isPalindrome ----')
  if (x < 0) {
    return false
  }

  // ------ DIGIT LIST ACQUISITION
  let powerCount = Math.floor(Math.log10(x))
  // Getting the power count of how many times 10 must be raised to be equal x
  // ex 465432: powerCount = 5, 10^5 = 100000; 100000: digit count = 6, 465432 digit count = 6
  let digitList = []

  console.log('x', x)
  for (powerCount; powerCount >= 0; powerCount--) {
    // For loop creates a digit list ex 456 -> [4, 5, 6]
    console.log('powerCount', powerCount)

    // Getting the first digit of x and adding to list
    let digit = Math.floor(x / 10 ** powerCount)
    digitList.push(digit)
    console.log('digit', digit)

    // Prepping x --taking out the current first digit-- to go through loop again
    x = x - (digit * (10 ** powerCount))
    console.log('x', x)
  }
  console.log('digitList', digitList)

  // ------ COMPARISON
  const digitListReversed = [...digitList].reverse()
  console.log('digitListReversed', digitListReversed)

  for (let i = 0; i < digitList.length; i++) {
    // Go through each digit and check if same backward and forward
    if (!(digitList[i] === digitListReversed[i])) {
      return false
    }
  }
  return true
}

console.log(isPalindrome(464))
console.log(isPalindrome(456))
