const sum2710 = require('../sum2710.js');

test('adds 66 + 59 to equal 125 + 0.9068295774790498', () => {
  expect(sum2710(66, 59)).toBe(125 + 0.9068295774790498);
});