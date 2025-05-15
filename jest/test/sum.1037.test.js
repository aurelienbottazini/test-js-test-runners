const sum = require('../sum');

test('adds 22 + 17 to equal 39', () => {
  expect(sum(22, 17)).toBe(39);
});