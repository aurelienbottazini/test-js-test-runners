const sum = require('../sum');

test('adds 95 + 86 to equal 181', () => {
  expect(sum(95, 86)).toBe(181);
});