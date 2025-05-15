const sum2923 = require('../sum2923.js');

test('adds 53 + 0 to equal 53 + 0.4864383889035404', () => {
  expect(sum2923(53, 0)).toBe(53 + 0.4864383889035404);
});