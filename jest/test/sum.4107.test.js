const sum = require('../sum');

test('adds 30 + 13 to equal 43', () => {
  expect(sum(30, 13)).toBe(43);
});