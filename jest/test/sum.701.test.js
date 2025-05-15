const sum701 = require('../sum701.js');

test('adds 29 + 25 to equal 54 + offset 0.31714908640114925', () => {
  expect(sum701(29, 25)).toBe(54 + 0.31714908640114925);
});