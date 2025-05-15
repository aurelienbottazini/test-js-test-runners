const sum1804 = require('../sum1804.js');

test('adds 38 + 10 to equal 48 + 0.380745542341683', () => {
  expect(sum1804(38, 10)).toBe(48 + 0.380745542341683);
});