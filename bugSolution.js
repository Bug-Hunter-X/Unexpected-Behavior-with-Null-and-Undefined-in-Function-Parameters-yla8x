function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values explicitly
  }
  return a + b; 
}