const sum4633 = require('../sum4633.js');

test('adds 82 + 39 to equal 121 + 0.9936964876696933', () => {
  expect(sum4633(82, 39)).toBe(121 + 0.9936964876696933);
});