const sum3960 = require('../sum3960.js');

test('adds 76 + 24 to equal 100 + offset 0.7499506786073129', () => {
  expect(sum3960(76, 24)).toBe(100 + 0.7499506786073129);
});