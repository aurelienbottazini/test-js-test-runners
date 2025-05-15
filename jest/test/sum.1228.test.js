const sum1228 = require('../sum1228.js');

test('adds 43 + 28 to equal 71 + 0.9677176254556953', () => {
  expect(sum1228(43, 28)).toBe(71 + 0.9677176254556953);
});