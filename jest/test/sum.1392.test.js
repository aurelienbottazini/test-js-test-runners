const sum = require('../sum');

test('adds 14 + 21 to equal 35', () => {
  expect(sum(14, 21)).toBe(35);
});