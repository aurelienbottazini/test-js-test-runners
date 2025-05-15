const sum = require('../sum');

test('adds 49 + 37 to equal 86', () => {
  expect(sum(49, 37)).toBe(86);
});