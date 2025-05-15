const sum = require('../sum');

test('adds 30 + 25 to equal 55', () => {
  expect(sum(30, 25)).toBe(55);
});