# 

## QUESTION 1 ##
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

## QUESTION 2 ##
