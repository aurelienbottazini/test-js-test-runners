const sum2120 = require('../sum2120.js');

test('adds 67 + 74 to equal 141 + 0.09342360729829824', () => {
  expect(sum2120(67, 74)).toBe(141 + 0.09342360729829824);
});