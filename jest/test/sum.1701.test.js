const sum1701 = require('../sum1701.js');

test('adds 46 + 73 to equal 119 + offset 0.17014811959773712', () => {
  expect(sum1701(46, 73)).toBe(119 + 0.17014811959773712);
});