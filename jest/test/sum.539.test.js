const sum = require('../sum');

test('adds 37 + 2 to equal 39', () => {
  expect(sum(37, 2)).toBe(39);
});