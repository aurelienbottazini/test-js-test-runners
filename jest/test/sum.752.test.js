const sum = require('../sum');

test('adds 73 + 45 to equal 118', () => {
  expect(sum(73, 45)).toBe(118);
});