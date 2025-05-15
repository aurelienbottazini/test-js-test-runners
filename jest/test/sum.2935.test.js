const sum2935 = require('../sum2935.js');

test('adds 85 + 24 to equal 109 + 0.8735821522806178', () => {
  expect(sum2935(85, 24)).toBe(109 + 0.8735821522806178);
});