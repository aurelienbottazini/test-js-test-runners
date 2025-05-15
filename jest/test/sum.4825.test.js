const sum = require('../sum');

test('adds 54 + 86 to equal 140', () => {
  expect(sum(54, 86)).toBe(140);
});