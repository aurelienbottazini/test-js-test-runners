const sum748 = require('../sum748.js');

test('adds 6 + 24 to equal 30 + 0.04520465730833445', () => {
  expect(sum748(6, 24)).toBe(30 + 0.04520465730833445);
});