const sum1171 = require('../sum1171.js');

test('adds 32 + 97 to equal 129 + offset 0.17452401149777097', () => {
  expect(sum1171(32, 97)).toBe(129 + 0.17452401149777097);
});