const sum3104 = require('../sum3104.js');

test('adds 46 + 40 to equal 86 + 0.6657601260301412', () => {
  expect(sum3104(46, 40)).toBe(86 + 0.6657601260301412);
});