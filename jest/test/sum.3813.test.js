const sum = require('../sum');

test('adds 83 + 59 to equal 142', () => {
  expect(sum(83, 59)).toBe(142);
});