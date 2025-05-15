const sum1902 = require('../sum1902.js');

test('adds 26 + 13 to equal 39 + 0.053539206369352055', () => {
  expect(sum1902(26, 13)).toBe(39 + 0.053539206369352055);
});