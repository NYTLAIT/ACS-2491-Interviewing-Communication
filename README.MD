# Purpose #
Practice for interviews by answering leetcode questions by restating, asking clarifications, stating assumptions, and thinking out loud before actually coding.

## QUESTION 1 ##
https://leetcode.com/problems/smallest-missing-multiple-of-k/description/?envType=daily-question&envId=2026-08-25

Question given: Given an integer array nums and an integer k, return the smallest positive multiple of k that is missing from nums.

Restate: I'll be given an array and of integers and I am to find the value that matches the smallest postive multiple of the given k that isnt in the list.

Questions:
1. Does the array contain both negatives and positives?
2. Is there a specific time goal you want to hit or a specific aspect of coding you would prefer like neatness and how concise the code is?
3. Does this code need to use any specific element?
4. Am I to write a function and would the function knowing what exactly is the input and put blockages to only continue if the array is something it can work on a priority?

Constraints given:
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
- 1 <= k <= 100

Claification of constraints:
- the array has a number of values between 1-100 and there values are also 1-100 so no negatives
- the integer k is also between 1-100

Assumptions:
- I would assume that nums might include floats -- thinking out loud: but it should not matter since were working with an array.
- As Python does not have built in array, I would be using Javascript as those are the only lamguages I know.
- You would like a function that takes a list and an integer and output an integer as well.

Thinking out loud:
(brainstorming, explain rationale, discuss tradeoffs, and suggest improvements)
We could simple look for each multiple of k in nums. Since nums is an array, it would have an easier time finding it making it O(n). However, although the value of k is greatly minimized (1-100) the number of possible multiples for k varies greatly from a value like 2 which has 50 multiples in the range to 80 which can only have one possible multiple; which would be itself -- would nums always have a missing multiple of k? -- due to the constraint of nums[i] <= 100 as the next multiple of 80 is 160 (80 * 2 = 160; 160 > 100).
Note that k could only have one possible multiple if k > 50 as they would hit the nums[i] <= 100 constraint on the second smallest multiple.
Also note that the number of multiples decreases exponentially with a steep drop from 100 possible multiples to 50 to 33 to 25 and so forth -- would this function be used consecutively or is it a one off thing?
I would settle for that solution as I would imagine you would always have to loop through the multiples of k making all solutions O(n) but it would be benefitial to have an early return.
So I would use a for loop to check the multiples of k in order and match it to a number in the array. If there is no match, return the multiple of k.

For improvements I would safeguard the arguements.

## QUESTION 2 ##
https://leetcode.com/problems/palindrome-number/description/

Question given: Given an integer x, return true if x is a palindrome, and false otherwise.

Restating: I am to see if a given integer x can be reversed in order and still be the same like race car turns into rac ecar (without the space). 

Questions:
1. Is there a range for the integers?
2. Does the negative count?
3. Do you have a preference of how I solve it or constraints?
4. Is there anything in writing the code that you would like for me to prioritize?
5. What language would you like it in?

Constraints given:
- -231 <= x <= 231 - 1
- Negatives do count
Challenge given:
- Could you solve it without converting the integer to a string?

Assumptions:
- Which language does not matter
- I assume the challenge given is the priority

Thinking Out Loud:
I believe slicing does not work on integers but if it did I would use slicing to reverse the order with [::-1].
Splitting into a list would also turn the integer into strings.
We might be able to get each digit by moving decimal points and flooring to get a digit and then subtracting it and then repeat but we would need to know how. We could use Math.floor and log10 to find how many times 10 must be raised to equal the digit of the numbers, then a for loop to raise 10 with the power count (decreasing by 1 each loop), and divide the integer given by that number to make it so that say 464611 becomes 4.64611 to get 4 and store it in a list. Then we subtract 400000 from the original and repeat. This would definitely not be efficient but we wouldnt have to turn it into a string.
Note, imediately return false for negatives.

Additional questions:
Do you want to do anything else with the number or any other variables after seeing my code?

