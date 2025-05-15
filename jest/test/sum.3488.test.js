const sum3488 = require('../sum3488.js');

test('adds 19 + 24 to equal 43 + 0.20745327707286965', () => {
  expect(sum3488(19, 24)).toBe(43 + 0.20745327707286965);
});