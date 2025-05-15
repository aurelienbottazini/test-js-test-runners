const sum3553 = require('../sum3553.js');

test('adds 77 + 94 to equal 171 + 0.7845039360265891', () => {
  expect(sum3553(77, 94)).toBe(171 + 0.7845039360265891);
});