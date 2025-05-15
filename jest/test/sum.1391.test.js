const sum = require('../sum');

test('adds 25 + 61 to equal 86', () => {
  expect(sum(25, 61)).toBe(86);
});