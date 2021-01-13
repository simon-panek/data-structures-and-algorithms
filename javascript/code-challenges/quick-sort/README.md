
# Challenge Summary

- Author: Simon Panek
- Collaborators: Mariko Alvarado & Ricardo Barcenas

Solution provided by: [Guru99](https://www.guru99.com/quicksort-in-javascript.html)

## Challenge Description

Create a function that sorts an array in place from lowest to hightest value using the quick sort algorithm.

## Approach & Efficiency

This algorithm splits the original array in to equal or near equal parts and creates a pointer at either end of the array. The left pointer is compared to the pivot (middle value) if it is less than the pivot it stays where it is and the pointer moves one to the right. If the left pointer points to a value greater than the pivot, the right pointer value is compared to the pivot. If the right pointer value is greater than the pivot the right pointer moves one index to the left and compares again. If the left pointer indicates a value greater than the pivot and the right pointer indicates a value less than the pivot then the two values swap positions. This is repeated until the pointers meet in the middle. At this point the function recurses on the left half and right half of the partially sorted array. This continues until all values are in order.

O(n) Time = O(nlogn)
O(n) Space = O(1)

## Solution

- No whiteboard required for this code challenge.
- [Quick Sort Blog Article](./blog.md)
