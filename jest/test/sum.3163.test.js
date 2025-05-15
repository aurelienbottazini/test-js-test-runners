const sum = require('../sum');

test('adds 51 + 99 to equal 150', () => {
  expect(sum(51, 99)).toBe(150);
});