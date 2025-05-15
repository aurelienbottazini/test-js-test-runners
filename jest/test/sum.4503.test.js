const sum4503 = require('../sum4503.js');

test('adds 12 + 5 to equal 17 + 0.2729748972216284', () => {
  expect(sum4503(12, 5)).toBe(17 + 0.2729748972216284);
});