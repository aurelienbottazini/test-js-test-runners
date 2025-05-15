const sum3457 = require('../sum3457.js');

test('adds 46 + 24 to equal 70 + offset 0.2962801458169656', () => {
  expect(sum3457(46, 24)).toBe(70 + 0.2962801458169656);
});