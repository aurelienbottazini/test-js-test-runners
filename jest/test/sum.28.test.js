const sum = require('../sum');

test('adds 41 + 2 to equal 43', () => {
  expect(sum(41, 2)).toBe(43);
});