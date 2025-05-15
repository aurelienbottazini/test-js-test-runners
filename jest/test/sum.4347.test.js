const sum = require('../sum');

test('adds 38 + 1 to equal 39', () => {
  expect(sum(38, 1)).toBe(39);
});