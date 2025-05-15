const sum = require('../sum');

test('adds 91 + 8 to equal 99', () => {
  expect(sum(91, 8)).toBe(99);
});