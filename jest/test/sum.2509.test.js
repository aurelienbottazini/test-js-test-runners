const sum2509 = require('../sum2509.js');

test('adds 33 + 32 to equal 65 + 0.35065476402882556', () => {
  expect(sum2509(33, 32)).toBe(65 + 0.35065476402882556);
});