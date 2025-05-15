const sum = require('../sum');

test('adds 65 + 45 to equal 110', () => {
  expect(sum(65, 45)).toBe(110);
});