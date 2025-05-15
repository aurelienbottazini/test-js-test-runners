const sum = require('../sum');

test('adds 34 + 10 to equal 44', () => {
  expect(sum(34, 10)).toBe(44);
});