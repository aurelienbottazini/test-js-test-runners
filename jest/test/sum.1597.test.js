const sum1597 = require('../sum1597.js');

test('adds 64 + 25 to equal 89 + offset 0.6929920126771851', () => {
  expect(sum1597(64, 25)).toBe(89 + 0.6929920126771851);
});