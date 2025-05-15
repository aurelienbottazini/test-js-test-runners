const sum = require('../sum');

test('adds 72 + 78 to equal 150', () => {
  expect(sum(72, 78)).toBe(150);
});