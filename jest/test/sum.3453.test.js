const sum = require('../sum');

test('adds 26 + 1 to equal 27', () => {
  expect(sum(26, 1)).toBe(27);
});