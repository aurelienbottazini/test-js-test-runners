const sum1545 = require('../sum1545.js');

test('adds 82 + 24 to equal 106 + offset 0.8141536993181518', () => {
  expect(sum1545(82, 24)).toBe(106 + 0.8141536993181518);
});