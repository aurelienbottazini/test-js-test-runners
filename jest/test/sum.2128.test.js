const sum = require('../sum');

test('adds 12 + 25 to equal 37', () => {
  expect(sum(12, 25)).toBe(37);
});