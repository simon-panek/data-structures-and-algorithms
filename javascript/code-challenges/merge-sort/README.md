
# Challenge Summary

- Author: Simon Panek
- Collaborators: Mariko Alvarado & Ricardo Barcenas

## Challenge Description

Create a function that sorts and merges an array in place from lowest to hightest value.

## Approach & Efficiency

This algorithm splits the original array in to equal or near equal parts and repeats this splitting until only two values are left in each sub-array. At this point the two values are compared and ordered. The two nearest sub-arrays are then merged so that their values are all in order. This is repeated until the entire array has been rebuilt in order.

O(n) Time = O(nlogn)
O(n) Space = O(n)

## Solution

- No whiteboard required for this code challenge.
- [Insertion Sort Blog Article](./blog.md)
