const sum2543 = require('../sum2543.js');

test('adds 23 + 1 to equal 24 + 0.9570775990383067', () => {
  expect(sum2543(23, 1)).toBe(24 + 0.9570775990383067);
});