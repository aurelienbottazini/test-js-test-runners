const sum3930 = require('../sum3930.js');

test('adds 56 + 91 to equal 147 + 0.9927971993465448', () => {
  expect(sum3930(56, 91)).toBe(147 + 0.9927971993465448);
});