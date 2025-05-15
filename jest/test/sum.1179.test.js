const sum = require('../sum');

test('adds 28 + 5 to equal 33', () => {
  expect(sum(28, 5)).toBe(33);
});