const sum701 = require('../sum701.js');

test('adds 94 + 58 to equal 152 + 0.5202097746141952', () => {
  expect(sum701(94, 58)).toBe(152 + 0.5202097746141952);
});