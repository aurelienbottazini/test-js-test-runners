const sum = require('../sum');

test('adds 14 + 25 to equal 39', () => {
  expect(sum(14, 25)).toBe(39);
});