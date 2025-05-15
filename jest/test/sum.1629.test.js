const sum1629 = require('../sum1629.js');

test('adds 59 + 50 to equal 109 + 0.8816812007913114', () => {
  expect(sum1629(59, 50)).toBe(109 + 0.8816812007913114);
});