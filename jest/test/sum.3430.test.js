const sum3430 = require('../sum3430.js');

test('adds 66 + 19 to equal 85 + offset 0.6241554042095152', () => {
  expect(sum3430(66, 19)).toBe(85 + 0.6241554042095152);
});