const sum = require('../sum');

test('adds 14 + 13 to equal 27', () => {
  expect(sum(14, 13)).toBe(27);
});