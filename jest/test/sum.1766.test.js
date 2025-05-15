const sum1766 = require('../sum1766.js');

test('adds 88 + 16 to equal 104 + offset 0.9921913394429525', () => {
  expect(sum1766(88, 16)).toBe(104 + 0.9921913394429525);
});