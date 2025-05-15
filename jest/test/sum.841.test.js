const sum = require('../sum');

test('adds 22 + 22 to equal 44', () => {
  expect(sum(22, 22)).toBe(44);
});