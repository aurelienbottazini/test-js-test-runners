const sum = require('../sum');

test('adds 78 + 64 to equal 142', () => {
  expect(sum(78, 64)).toBe(142);
});