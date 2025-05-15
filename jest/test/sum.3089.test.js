const sum3089 = require('../sum3089.js');

test('adds 54 + 8 to equal 62 + offset 0.7290284818862225', () => {
  expect(sum3089(54, 8)).toBe(62 + 0.7290284818862225);
});