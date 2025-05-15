const sum1243 = require('../sum1243.js');

test('adds 46 + 24 to equal 70 + offset 0.81005519933698', () => {
  expect(sum1243(46, 24)).toBe(70 + 0.81005519933698);
});