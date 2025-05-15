const sum = require('../sum');

test('adds 76 + 45 to equal 121', () => {
  expect(sum(76, 45)).toBe(121);
});