const sum = require('../sum');

test('adds 26 + 26 to equal 52', () => {
  expect(sum(26, 26)).toBe(52);
});