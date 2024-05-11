---
sidebar_position: 40
---

# Algorithms

When practicing algorithms, it's important to hone your problem-solving skills by familiarizing yourself with the problem, compiling a list of test cases, and analyzing the issue thoroughly. As your partner, ChatGPT can help you by providing solutions, allowing you to learn from its analysis and summary skills.

## Understand the problem

First, learn how ChatGPT understand the problem, let's use the classis Two Sum problem: 

**Example Prompts:**

> Imagine you have an array filled with different numbers and a target number. Your task is to find two numbers within the array that, when added together, equal the target number. However, you can only use each number once, making the challenge just a bit more difficult. Don't spend too much time worrying about the order in which the numbers are presented; the solution can be returned in any order.
> 
> Explain the problem step by step use basic english with example

**Answer:**

> Sure, here's a step-by-step explanation of the problem in simple English with an example:
> 
> 1. You are given an array of numbers, such as [2, 4, 6, 8, 10].
> 2. You are also given a target number, such as 12.
> 3. Your task is to find two numbers within the array that add up to the target number. In this example, the two numbers that add up to 12 are 2 and 10.
> 4. However, you can only use each number once. So, in this example, you can't use the number 2 twice to get to 12.
> 5. Once you've found the two numbers that add up to the target number, you need to return their indices in the original array. In the example, the index of 2 is 0 and the index of 10 is 4, so you would return an array of [0, 4].
> 6. You can return the answer in any order, so you could also return [4, 0] in this example.
> 7. I hope that helps clarify the problem for you!

## Ask for hint

If you don't know how to solve this problem, don't ask for the answer directly, try to let ChatGPT give your a few hints like an interview, which can help you exercise your problem solving skill. 

**Example Prompts:**
> I don't know how to solve this problem. Can you give me 3 hints (question base) so I can solve it easier?

**Answer:**
> Of course, here are three question-based hints to help you solve the problem:
> 
> 1. What is the target number and how can you use it to determine which pair of numbers in the array you need to find?
> 2. How can you iterate over the array and compare every number to every other number to see if there is a pair that adds up to the target number?
> 3. How can you keep track of which numbers you've already used in a pair so that you don't use them again and violate the requirement that each number can only be used once?

## Analyse process

**Example Prompts:**
> Tell me your analyse process step by step how to solve this problem?

**Answer:**
> Sure, here is a step-by-step process to solve the problem:
>
> First, we need to understand the problem requirements and constraints. The problem statement specifies that we have an array filled with different numbers and a target number, and we need to find two numbers within the array that add up to the target number. We can only use each number in the array once.
>
> One approach to solve this problem is to use a nested loop. The outer loop will iterate through each number in the array, and the inner loop will iterate through the remaining numbers to find a pair that adds up to the target number. This approach has a time complexity of O(n^2) where n is the length of the array.
>
> Another approach to solve this problem is to use a hash table or set. We can iterate through each number in the array and check if the difference between the target number and the current number is present in the hash table or set. If it is present, we have found a pair that adds up to the target number. Otherwise, we add the current number to the hash table or set. This approach has a time complexity of O(n) where n is the length of the array.
>
> After we have identified the pair that adds up to the target number, we can return the two numbers in any order as specified in the problem statement.

## Find Test Cases

**Example Prompts:**
> Tell me your analyse process step by step how to find out 3 test cases include the normal case and edge case?

**Answer:**
> Sure, here's my step-by-step process for finding three test cases for the problem:
> 
> 1. Review the problem statement and identify the key requirements and constraints. In this case, I need to find two numbers from an array that add up to a target number, while using each number only once.
> 2. Think of a "normal" use case in which the array has multiple numbers that can be added to reach the target sum. In this case, I chose an array with five numbers that could be added in different ways to equal the target sum.
> 3. Consider possible edge cases that could challenge the solution. In this problem, I thought of two edge cases:
>       - An array where the target sum can only be achieved by adding the first and last element of the array.
>       - An array where all the numbers are identical and the target sum can only be achieved by pairing the same two elements.

## List Test Cases

Generally speaking, you need to find different kind of test cases yourself inculde the normal cases and edge cases. You can ask ChatGPT to provide some test cases.

**Example Prompts:**
> List 3 test cases with expected answers, test cases should include normal cases as well as edge cases.

**Answer:**
> Sure, here are three test cases with expected answers:
> 
> Normal Case:
> nums = [2, 6, 3, 8, 5], target = 11 Expected answer: [0, 3]
> 
> Edge Case:
> nums = [1, 1, 1, 1, 1], target = 2 Expected answer: [0, 1]
> 
> Edge Case:
> nums = [0, 10, -10, 2, 3, 4, -4], target = 0 Expected answer: [0, 2]
> 
> In the first test case, we have a normal scenario where we have an array with random numbers, and our expected answer is to find two numbers adding together to get the target value 11.
> 
> In the second test case, we have an edge case where all the numbers in the array are the same. We expect the solution to find the two numbers that add up to the target value of 2.
> 
> In the third test case, we have another edge case where we have some negative as well as positive numbers in the array, and our expected answer is to find two numbers adding together to get the target value of 0.

## Time Complexity Analysis

**Example Prompts:**
> This is my solution, analyzing time complexity step by step
>
>     class Solution:
>         def twoSum(self, nums: List[int], target: int) -> List[int]:
>             n = len(nums)
>             for i in range(n):
>                 for j in range(i + 1, n):
>                     if nums[i] + nums[j] == target:
>                         return [i, j]

**Answer:**

> The time complexity of the solution is O(n^2), where n is the length of the input list nums.
> 
> This is because the solution uses a nested loop to iterate over all possible pairs of indices in the list. The outer loop iterates over all n indices, while the inner loop iterates over all n-1 indices after the current index of the outer loop.
> Therefore, the total number of iterations is the sum of 1 to n-1, which is O(n^2). The if statement inside the inner loop has a constant time complexity of O(1).

When dealing with complex problems, you need to ask some basic content first, such as:

> - how many times the recursive function is calle
> - how many different sub-states are there in dynamic programming
>
> and finally let it answer the time complexity

## Code Review

Let chatgpt to review your code in order to receive feedback

**Example Prompts:**

> Review my code to improve readability and efficiency step by step, your answer should return bullet point with index 
>
>     class Solution:
>         def twoSum(self, nums: List[int], target: int) -> List[int]:
>             # lst = []
>             n = len(nums)
>             # Two for loop for the nums
>             for i in range(n):
>                 for j in range(i+1, n):
>                     if nums[i]+nums[j] == target:
>                         # return i and j
>                         return [i, j]
>         return []

**Answer:**
> 1. Add comments to explain the purpose of the code block.
> 2. Remove unused code, in this case the commented out lst = [] line.
> 3. Rename variables with more descriptive names. In this case, n could be renamed to num_elements.
> 4. Use the enumerate function to loop by index and value rather than just index.
> 5. Use a dictionary to store the differences between the target and the current element in the loop, rather than comparing each element to every other element in the list. The dictionary will allow for constant time lookups, resulting in a more efficient algorithm.
> 6. Return an empty list if no solution is found rather than returning nothing outside of the for loops.
> Copy
>
>       class Solution:
>           def twoSum(self, nums: List[int], target: int) -> List[int]:
>               # Loop through list of numbers with an index and value
>               num_elements = len(nums)
>               differences = {}
>               for index, num in enumerate(nums):
>                   # Calculate difference
>                   diff = target - num
>                   # If difference already in dictionary, return indexes
>                   if diff in differences:
>                       return [differences[diff], index]
>                   # Otherwise, add difference to dictionary
>                   differences[num] = index
>               # Return empty list if no solution found
>               return []
