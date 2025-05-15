const sum312 = require('../sum312.js');

test('adds 16 + 1 to equal 17 + 0.04819228025788247', () => {
  expect(sum312(16, 1)).toBe(17 + 0.04819228025788247);
});