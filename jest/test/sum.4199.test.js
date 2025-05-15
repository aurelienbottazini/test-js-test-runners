const sum = require('../sum');

test('adds 85 + 86 to equal 171', () => {
  expect(sum(85, 86)).toBe(171);
});