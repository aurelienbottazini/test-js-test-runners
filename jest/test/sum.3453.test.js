const sum3453 = require('../sum3453.js');

test('adds 9 + 24 to equal 33 + 0.23338807499390868', () => {
  expect(sum3453(9, 24)).toBe(33 + 0.23338807499390868);
});