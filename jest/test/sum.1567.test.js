const sum = require('../sum');

test('adds 57 + 48 to equal 105', () => {
  expect(sum(57, 48)).toBe(105);
});