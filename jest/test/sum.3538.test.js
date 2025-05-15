const sum = require('../sum');

test('adds 20 + 32 to equal 52', () => {
  expect(sum(20, 32)).toBe(52);
});