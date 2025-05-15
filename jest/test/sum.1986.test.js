const sum = require('../sum');

test('adds 18 + 25 to equal 43', () => {
  expect(sum(18, 25)).toBe(43);
});