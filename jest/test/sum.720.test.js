const sum = require('../sum');

test('adds 21 + 32 to equal 53', () => {
  expect(sum(21, 32)).toBe(53);
});