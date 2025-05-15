const sum = require('../sum');

test('adds 6 + 32 to equal 38', () => {
  expect(sum(6, 32)).toBe(38);
});