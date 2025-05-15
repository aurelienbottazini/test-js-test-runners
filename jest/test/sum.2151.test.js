const sum = require('../sum');

test('adds 70 + 45 to equal 115', () => {
  expect(sum(70, 45)).toBe(115);
});