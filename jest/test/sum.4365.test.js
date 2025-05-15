const sum = require('../sum');

test('adds 40 + 21 to equal 61', () => {
  expect(sum(40, 21)).toBe(61);
});