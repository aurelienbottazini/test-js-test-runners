const sum2239 = require('../sum2239.js');

test('adds 32 + 72 to equal 104 + 0.08602845570067585', () => {
  expect(sum2239(32, 72)).toBe(104 + 0.08602845570067585);
});