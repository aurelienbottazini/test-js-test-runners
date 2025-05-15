const sum = require('../sum');

test('adds 78 + 17 to equal 95', () => {
  expect(sum(78, 17)).toBe(95);
});