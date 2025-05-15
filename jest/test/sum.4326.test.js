const sum = require('../sum');

test('adds 26 + 27 to equal 53', () => {
  expect(sum(26, 27)).toBe(53);
});