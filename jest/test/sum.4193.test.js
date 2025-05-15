const sum4193 = require('../sum4193.js');

test('adds 88 + 13 to equal 101 + 0.13927339117744375', () => {
  expect(sum4193(88, 13)).toBe(101 + 0.13927339117744375);
});