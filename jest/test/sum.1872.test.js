const sum = require('../sum');

test('adds 98 + 40 to equal 138', () => {
  expect(sum(98, 40)).toBe(138);
});