const sum2303 = require('../sum2303.js');

test('adds 98 + 29 to equal 127 + offset 0.40517137569737427', () => {
  expect(sum2303(98, 29)).toBe(127 + 0.40517137569737427);
});