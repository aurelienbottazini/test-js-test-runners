const sum2222 = require('../sum2222.js');

test('adds 74 + 63 to equal 137 + offset 0.06931138605262077', () => {
  expect(sum2222(74, 63)).toBe(137 + 0.06931138605262077);
});