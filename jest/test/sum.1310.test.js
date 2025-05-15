const sum1310 = require('../sum1310.js');

test('adds 42 + 6 to equal 48 + offset 0.08815377322506202', () => {
  expect(sum1310(42, 6)).toBe(48 + 0.08815377322506202);
});