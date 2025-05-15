const sum = require('../sum');

test('adds 37 + 49 to equal 86', () => {
  expect(sum(37, 49)).toBe(86);
});