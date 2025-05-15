const sum = require('../sum');

test('adds 99 + 86 to equal 185', () => {
  expect(sum(99, 86)).toBe(185);
});