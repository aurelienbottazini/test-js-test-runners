const sum730 = require('../sum730.js');

test('adds 5 + 28 to equal 33 + 0.2742778134830728', () => {
  expect(sum730(5, 28)).toBe(33 + 0.2742778134830728);
});