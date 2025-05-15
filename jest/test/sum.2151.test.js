const sum2151 = require('../sum2151.js');

test('adds 29 + 92 to equal 121 + offset 0.9010451140999626', () => {
  expect(sum2151(29, 92)).toBe(121 + 0.9010451140999626);
});