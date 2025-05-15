const sum1979 = require('../sum1979.js');

test('adds 3 + 54 to equal 57 + offset 0.7766207782062694', () => {
  expect(sum1979(3, 54)).toBe(57 + 0.7766207782062694);
});