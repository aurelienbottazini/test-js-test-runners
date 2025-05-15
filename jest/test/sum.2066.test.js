const sum = require('../sum');

test('adds 42 + 35 to equal 77', () => {
  expect(sum(42, 35)).toBe(77);
});