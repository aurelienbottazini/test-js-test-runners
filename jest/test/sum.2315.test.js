const sum2315 = require('../sum2315.js');

test('adds 14 + 53 to equal 67 + 0.7520031245410979', () => {
  expect(sum2315(14, 53)).toBe(67 + 0.7520031245410979);
});