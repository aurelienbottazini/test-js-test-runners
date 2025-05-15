const sum2834 = require('../sum2834.js');

test('adds 39 + 24 to equal 63 + offset 0.3948438460780217', () => {
  expect(sum2834(39, 24)).toBe(63 + 0.3948438460780217);
});