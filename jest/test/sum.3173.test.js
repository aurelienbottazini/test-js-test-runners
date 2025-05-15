const sum = require('../sum');

test('adds 14 + 48 to equal 62', () => {
  expect(sum(14, 48)).toBe(62);
});