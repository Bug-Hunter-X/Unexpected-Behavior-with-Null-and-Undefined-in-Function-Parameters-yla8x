function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Incorrect handling of null and undefined
  }
  return a + b; 
}