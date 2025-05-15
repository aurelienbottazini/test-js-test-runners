const sum2635 = require('../sum2635.js');

test('adds 33 + 24 to equal 57 + 0.4634385244017778', () => {
  expect(sum2635(33, 24)).toBe(57 + 0.4634385244017778);
});