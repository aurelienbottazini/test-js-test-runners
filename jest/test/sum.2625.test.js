const sum2625 = require('../sum2625.js');

test('adds 67 + 66 to equal 133 + 0.24668422145877955', () => {
  expect(sum2625(67, 66)).toBe(133 + 0.24668422145877955);
});