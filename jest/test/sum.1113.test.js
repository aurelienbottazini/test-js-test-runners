const sum = require('../sum');

test('adds 22 + 33 to equal 55', () => {
  expect(sum(22, 33)).toBe(55);
});