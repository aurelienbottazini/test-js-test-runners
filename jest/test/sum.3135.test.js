const sum = require('../sum');

test('adds 11 + 61 to equal 72', () => {
  expect(sum(11, 61)).toBe(72);
});