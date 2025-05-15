const sum2046 = require('../sum2046.js');

test('adds 89 + 83 to equal 172 + offset 0.8132222753137851', () => {
  expect(sum2046(89, 83)).toBe(172 + 0.8132222753137851);
});