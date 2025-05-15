const sum = require('../sum');

test('adds 80 + 15 to equal 95', () => {
  expect(sum(80, 15)).toBe(95);
});