const sum = require('../sum');

test('adds 19 + 20 to equal 39', () => {
  expect(sum(19, 20)).toBe(39);
});