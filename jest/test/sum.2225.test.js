const sum2225 = require('../sum2225.js');

test('adds 73 + 45 to equal 118 + 0.17085026379667256', () => {
  expect(sum2225(73, 45)).toBe(118 + 0.17085026379667256);
});