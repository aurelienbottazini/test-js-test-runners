const sum1756 = require('../sum1756.js');

test('adds 90 + 24 to equal 114 + offset 0.5843950879490438', () => {
  expect(sum1756(90, 24)).toBe(114 + 0.5843950879490438);
});