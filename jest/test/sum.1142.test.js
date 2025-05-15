const sum = require('../sum');

test('adds 43 + 45 to equal 88', () => {
  expect(sum(43, 45)).toBe(88);
});