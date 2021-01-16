# Hashtables

A hash table or hash map stores key/value pairs as a node within a linked list that is stored in an array. The array index position for any key is provided by a repeatable hash calculation performed on the key.

## Author: Simon Panek

### Collaborators: Mariko, Ricardo, Stacy, Garret, Tamina, Ashley

## Challenge

Define a hash map class with the following methods: hash, set, get, & contains.

## Approach & Efficiency

- `hash()` --> Performs a calculation on a given key that turns it into a single repeatable integer and operates with an efficiency of O(1).
- `set()` --> Adds a key/value pair to the hash table and does so with an efficiency of O(n).
- `get()` --> Returns a value for a given key and does so with an efficiency of O(n).
- `contains()` --> Returns a boolean given a key. Returns true if the key currently exists in the hash map and false if not. This method has an efficiency of O(n).
