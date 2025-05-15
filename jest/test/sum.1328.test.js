const sum1328 = require('../sum1328.js');

test('adds 36 + 82 to equal 118 + offset 0.3808138259471686', () => {
  expect(sum1328(36, 82)).toBe(118 + 0.3808138259471686);
});