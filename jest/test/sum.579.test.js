const sum579 = require('../sum579.js');

test('adds 42 + 54 to equal 96 + offset 0.7616442608101872', () => {
  expect(sum579(42, 54)).toBe(96 + 0.7616442608101872);
});