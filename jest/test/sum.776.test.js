const sum = require('../sum');

test('adds 90 + 45 to equal 135', () => {
  expect(sum(90, 45)).toBe(135);
});