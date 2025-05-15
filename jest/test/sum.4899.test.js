const sum4899 = require('../sum4899.js');

test('adds 2 + 40 to equal 42 + offset 0.7043467556391396', () => {
  expect(sum4899(2, 40)).toBe(42 + 0.7043467556391396);
});