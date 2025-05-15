const sum3397 = require('../sum3397.js');

test('adds 86 + 98 to equal 184 + 0.45480851290901414', () => {
  expect(sum3397(86, 98)).toBe(184 + 0.45480851290901414);
});