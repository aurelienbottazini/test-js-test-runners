const sum2775 = require('../sum2775.js');

test('adds 67 + 13 to equal 80 + offset 0.1690486242927629', () => {
  expect(sum2775(67, 13)).toBe(80 + 0.1690486242927629);
});