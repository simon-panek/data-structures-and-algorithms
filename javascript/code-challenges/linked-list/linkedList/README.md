# Singly Linked List

## Author: Simon Panek

## Contributors and Collaborators: Ricardo, Stacy, Nicco, and Cait!

## Resources

[YouTube video by Jason Lay regarding the zipping of linked lists](https://www.youtube.com/watch?v=2algBs0nxEk);

## Challenge

Create a class that will allow the creation of linked lists. It should allow a new node to be created, a list to be searched for matching contents, and a string of the entire list to be generated, a node to be appended, and nodes to be added before or after a target node.

## Approach

This solution creates a class for a singular node and a class for a linked list. Eight methods allow interaction with the linked list.

## API & Efficiency

- `insert()` - Inserts a new node at the head of the list and operates with and efficiency of O(1).

- `includes()` - Searches the list and returns true if a given value is present in the list. This method operates with an efficiency of O(n).

- `toString()` - This method returns the values of all nodes in order as formatted string. It operates with an efficiency of O(n).

- `append()` - Adds a node with given `value` to the end of the list. It operates with an efficiency of O(n).

- `insertBefore()` - Adds a new node with given `newValue` immediately before the first `value` node. It operates with an efficiency of O(n).

- `insertAfter()` - Adds a new node with given `newValue` immediately after the first `value` node. It operates with an efficiency of O(n).

- `kthFromEnd()` - Returns the value of a node at the given position from the null end of the list. It operates with an efficiency of O(n).

- `zipLists()` - Returns a single list created from two given lists. The nodes should alternate. It should operate with an efficiency of O(1).

## Whiteboard

![Whiteboard Image Day 6](codechallenge06.png)

![Whiteboard Image Day 7](k-th-valuefromtheend.png)

![Whiteboard Image Day 8](401-cc-08-whiteboard.png)
