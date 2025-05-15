const sum910 = require('../sum910.js');

test('adds 37 + 63 to equal 100 + offset 0.19237575495893777', () => {
  expect(sum910(37, 63)).toBe(100 + 0.19237575495893777);
});