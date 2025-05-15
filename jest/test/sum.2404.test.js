const sum = require('../sum');

test('adds 5 + 90 to equal 95', () => {
  expect(sum(5, 90)).toBe(95);
});