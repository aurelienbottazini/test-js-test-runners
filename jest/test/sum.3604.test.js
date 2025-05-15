const sum3604 = require('../sum3604.js');

test('adds 70 + 44 to equal 114 + 0.7843619655487976', () => {
  expect(sum3604(70, 44)).toBe(114 + 0.7843619655487976);
});