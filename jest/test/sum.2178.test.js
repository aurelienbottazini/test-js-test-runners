const sum = require('../sum');

test('adds 74 + 45 to equal 119', () => {
  expect(sum(74, 45)).toBe(119);
});