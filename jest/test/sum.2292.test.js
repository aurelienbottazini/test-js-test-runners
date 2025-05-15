const sum = require('../sum');

test('adds 36 + 1 to equal 37', () => {
  expect(sum(36, 1)).toBe(37);
});