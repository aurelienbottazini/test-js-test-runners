const sum515 = require('../sum515.js');

test('adds 73 + 5 to equal 78 + offset 0.898148575930728', () => {
  expect(sum515(73, 5)).toBe(78 + 0.898148575930728);
});