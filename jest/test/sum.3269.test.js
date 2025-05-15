const sum = require('../sum');

test('adds 73 + 69 to equal 142', () => {
  expect(sum(73, 69)).toBe(142);
});