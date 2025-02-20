# Unexpected Behavior with Null and Undefined in Function Parameters

This repository demonstrates a common JavaScript error related to handling `null` and `undefined` values in function parameters.  The original code incorrectly handles these cases, leading to potential issues.  The corrected solution shows best practices for handling these scenarios.

## Bug Description

The `foo` function attempts to add two numbers. However, it doesn't correctly handle situations where one or both input parameters are `null` or `undefined`. This leads to unexpected results.

## Solution

The solution incorporates a robust check to explicitly determine whether a parameter is `null` or `undefined` using the strict equality (`===`) operator.  If either is `null` or `undefined`, it returns a default value (0 in this example), thus preventing errors.  This approach uses explicit checks for nullish values, providing more clarity and avoiding potential confusion with loose equality (`==`).