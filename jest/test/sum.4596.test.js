const sum = require('../sum');

test('adds 90 + 9 to equal 99', () => {
  expect(sum(90, 9)).toBe(99);
});