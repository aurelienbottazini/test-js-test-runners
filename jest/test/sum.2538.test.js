const sum2538 = require('../sum2538.js');

test('adds 65 + 62 to equal 127 + offset 0.6857125616485403', () => {
  expect(sum2538(65, 62)).toBe(127 + 0.6857125616485403);
});