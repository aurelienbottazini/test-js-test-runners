const sum = require('../sum');

test('adds 72 + 68 to equal 140', () => {
  expect(sum(72, 68)).toBe(140);
});