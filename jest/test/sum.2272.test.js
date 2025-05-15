const sum = require('../sum');

test('adds 68 + 74 to equal 142', () => {
  expect(sum(68, 74)).toBe(142);
});