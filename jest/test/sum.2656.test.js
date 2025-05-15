const sum = require('../sum');

test('adds 45 + 13 to equal 58', () => {
  expect(sum(45, 13)).toBe(58);
});