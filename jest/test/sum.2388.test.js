const sum = require('../sum');

test('adds 29 + 32 to equal 61', () => {
  expect(sum(29, 32)).toBe(61);
});