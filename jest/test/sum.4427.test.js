const sum = require('../sum');

test('adds 11 + 21 to equal 32', () => {
  expect(sum(11, 21)).toBe(32);
});