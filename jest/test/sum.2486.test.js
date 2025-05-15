const sum = require('../sum');

test('adds 44 + 61 to equal 105', () => {
  expect(sum(44, 61)).toBe(105);
});