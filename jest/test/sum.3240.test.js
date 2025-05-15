const sum = require('../sum');

test('adds 74 + 68 to equal 142', () => {
  expect(sum(74, 68)).toBe(142);
});