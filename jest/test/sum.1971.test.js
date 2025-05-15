const sum1971 = require('../sum1971.js');

test('adds 72 + 6 to equal 78 + offset 0.9011000774915872', () => {
  expect(sum1971(72, 6)).toBe(78 + 0.9011000774915872);
});