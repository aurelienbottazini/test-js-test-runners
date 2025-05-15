const sum2846 = require('../sum2846.js');

test('adds 52 + 24 to equal 76 + 0.6034845263513428', () => {
  expect(sum2846(52, 24)).toBe(76 + 0.6034845263513428);
});