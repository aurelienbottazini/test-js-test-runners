const sum = require('../sum');

test('adds 69 + 73 to equal 142', () => {
  expect(sum(69, 73)).toBe(142);
});