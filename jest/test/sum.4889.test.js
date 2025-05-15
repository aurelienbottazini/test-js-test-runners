const sum4889 = require('../sum4889.js');

test('adds 4 + 24 to equal 28 + offset 0.07547344272578482', () => {
  expect(sum4889(4, 24)).toBe(28 + 0.07547344272578482);
});