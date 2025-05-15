const sum = require('../sum');

test('adds 81 + 18 to equal 99', () => {
  expect(sum(81, 18)).toBe(99);
});