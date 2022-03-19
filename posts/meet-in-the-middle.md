---
title: 'Meet in the middle'
date: 'March 5, 2022'
level: 'Difficulty Level : Hard'
excerpt: ' Given a set of n integers where n <= 40. Each of them is at most 1012, determine the maximum sum subset having sum less than or equal S where S <= 1018.'
cover_image: '/images/posts/img3.jpg'
---

Given a set of n integers where n <= 40. Each of them is at most 1012, determine
the maximum sum subset having sum less than or equal S where S <= 1018.

## Example

    Input  : set[] = {45, 34, 4, 12, 5, 2} and S = 42
    Output : 41
    Maximum possible subset sum is 41 which can be 
    obtained by summing 34, 5 and 2.

    Input  : Set[] = {3, 34, 4, 12, 5, 2} and S = 10
    Output : 10
    Maximum possible subset sum is 10 which can be 
    obtained by summing 2, 3 and 5.

A Brute Force approach to solve this problem would be find all possible subset sums of N integers and check if it is less than or equal S and keep track of such a subset with maximum sum. The time complexity using this approach would be O(2n) and n is at most 40. 240 will be quite large and hence we need to find more optimal approach.


*Meet in the middle* is a search technique which is used when the input is small but not as small that brute force can be used. Like divide and conquer it splits the problem into two, solves them individually and then merge them. But we can’t apply meet in the middle like divide and conquer because we don’t have the same structure as the original problem.

- Split the set of integers into 2 subsets say A and B. A having first n/2 integers and B having rest.
- Find all possible subset sums of integers in set A and store in an array X. Similarly calculate all possible subset sums of integers in set B and store in array Y. Hence, Size of each of the array X and Y will be at most 2n/2.
- Now merge these 2 subproblems. Find combinations from array X and Y such that their sum is less than or equal to S.
    - One way to do that is simply iterate over all elements of array Y for each element of array X to check the existence of such a combination. This will take O( (2n/2)2) which is equivalent to O(2n).
    - To make it less complex, first sort array Y and then iterate over each element of X and for each element x in X use binary search to find maximum element y in Y such that x + y <= S.
    - Binary search here helps in reducing complexity from 2nto 2n/2log(2n/2)which is equivalent to 2n/2n.
    - Thus our final running time is O(2n/2n).