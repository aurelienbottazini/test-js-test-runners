const sum2273 = require('../sum2273.js');

test('adds 43 + 78 to equal 121 + offset 0.4749530274175665', () => {
  expect(sum2273(43, 78)).toBe(121 + 0.4749530274175665);
});