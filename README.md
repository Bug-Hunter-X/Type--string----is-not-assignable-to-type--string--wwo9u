# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.  The solution shows how to correctly handle this scenario.

## Bug
The `greeter` function expects a single string argument. However, the `user` variable is an array of strings.  This causes a type error when the function is called.

## Solution
The solution iterates over the array and calls the function for each element in the array.