const sum1950 = require('../sum1950.js');

test('adds 92 + 59 to equal 151 + offset 0.5282453241087145', () => {
  expect(sum1950(92, 59)).toBe(151 + 0.5282453241087145);
});