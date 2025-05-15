const sum = require('../sum');

test('adds 34 + 71 to equal 105', () => {
  expect(sum(34, 71)).toBe(105);
});