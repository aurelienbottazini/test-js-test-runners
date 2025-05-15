const sum = require('../sum');

test('adds 0 + 61 to equal 61', () => {
  expect(sum(0, 61)).toBe(61);
});