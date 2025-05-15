const sum4799 = require('../sum4799.js');

test('adds 42 + 73 to equal 115 + 0.030699352369850552', () => {
  expect(sum4799(42, 73)).toBe(115 + 0.030699352369850552);
});