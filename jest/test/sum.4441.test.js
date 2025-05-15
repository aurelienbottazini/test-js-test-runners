const sum = require('../sum');

test('adds 19 + 5 to equal 24', () => {
  expect(sum(19, 5)).toBe(24);
});