const sum = require('../sum');

test('adds 24 + 81 to equal 105', () => {
  expect(sum(24, 81)).toBe(105);
});