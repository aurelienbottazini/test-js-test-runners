const sum912 = require('../sum912.js');

test('adds 11 + 24 to equal 35 + offset 0.6395637393884802', () => {
  expect(sum912(11, 24)).toBe(35 + 0.6395637393884802);
});