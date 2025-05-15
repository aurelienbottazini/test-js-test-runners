const sum = require('../sum');

test('adds 49 + 32 to equal 81', () => {
  expect(sum(49, 32)).toBe(81);
});