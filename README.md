# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error with Firebase's `onAuthStateChanged` function: forgetting to unsubscribe.  The `authBug.js` file shows the flawed code, resulting in a memory leak.  `authBugSolution.js` provides the corrected version.

## Problem
The `onAuthStateChanged` listener remains active indefinitely unless explicitly unsubscribed.  This causes memory leaks, particularly in applications with long lifecycles. 

## Solution
The solution involves calling the `unsubscribe` function when the component or process using the listener is unmounted or no longer needs authentication status updates.