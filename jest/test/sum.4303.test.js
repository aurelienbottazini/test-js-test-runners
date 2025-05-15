const sum4303 = require('../sum4303.js');

test('adds 92 + 34 to equal 126 + 0.8990885405554212', () => {
  expect(sum4303(92, 34)).toBe(126 + 0.8990885405554212);
});