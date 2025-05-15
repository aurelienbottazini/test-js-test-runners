const sum = require('../sum');

test('adds 61 + 1 to equal 62', () => {
  expect(sum(61, 1)).toBe(62);
});