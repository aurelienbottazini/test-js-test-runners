const sum2741 = require('../sum2741.js');

test('adds 22 + 89 to equal 111 + 0.9015609296459998', () => {
  expect(sum2741(22, 89)).toBe(111 + 0.9015609296459998);
});