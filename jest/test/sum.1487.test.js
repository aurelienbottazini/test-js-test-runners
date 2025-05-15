const sum = require('../sum');

test('adds 35 + 42 to equal 77', () => {
  expect(sum(35, 42)).toBe(77);
});