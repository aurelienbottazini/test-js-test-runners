const sum = require('../sum');

test('adds 4 + 68 to equal 72', () => {
  expect(sum(4, 68)).toBe(72);
});