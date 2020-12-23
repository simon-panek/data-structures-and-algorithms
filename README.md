# Data Structures and Algorithms

## Create a copy of this repository

1. Create a new repository in your GitHub account called `data-structures-and-algorithms`
1. Clone the empty repository to your machine
1. Choose the "Download" option under "Clone or Download" for this repository
1. Copy that .zip file inside of the local `data-structures-and-algorithms` repo created in step 2
1. Unzip the file there
1. Remove the .zip file
1. Run the command `npm install` from the repository root directory
1. Do an `ACP` of the `data-structures-and-algorithms` repository

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

- Each Data Structure should be implemented separately in a language specific manner, in a properly named folder.
  - i.e. `linked-lists`
- For daily challenges:
  - Each implementation should have a challenges folder, named `challenges`
  - Within the challenges folder, a subfolder bearing the name of the challenge
    - i.e. `remove-duplicates`
  - Within the proper subfolder:
    - A README.md that will house your challenge summary, whiteboard photos
    - Your implementation and tests for the code challenge
    - Perform your work in accordance with your 401 language's instructions

### 401 Table of Contents

- [Array Reverse - Day 01](javascript/code-challenges/arrays/arrayReverse/README.md)
- [Array Shift  - Day 02](javascript/code-challenges/arrays/arrayShift/README.md)
- [Array Binary Search  - Day 03](javascript/code-challenges/arrays/arrayBinarySearch/README.md)
- [Singly Linked Lists - Day 05, 06, 07, & 08](javascript/code-challenges/linked-list/linkedList/README.md)
- [Singly Stacks & Queues - Day 10](javascript/code-challenges/stack-and-queue/README.md)
- [PseudoQueue - Day 11](javascript/code-challenges/stack-and-queue/queueWithStacks/README.md)
- [AnimalShelter - Day 12](javascript/code-challenges/stack-and-queue/fifoAnimalShelter/README.md)
- [Multi-bracket Validation - Day 13](javascript/code-challenges/multiBracketValidation/README.md)

The final structure should resemble this:s

```bash
  data-structures-and-algorithms
  |
  ├── code-challenges
  │  └── challenge-01.test.js
  │  └── challenge-02.test.js
  │  └── ...
  |
  ├── [javascript]
  │   └── [code-challenges]
  │       └── arrays
  |         |__ arrayReverse
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── ...
  |
  ├── node_modules
  |
  ├── .github
  │   └── workflows
  │       └── javascript-tests.yml
  │
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```
