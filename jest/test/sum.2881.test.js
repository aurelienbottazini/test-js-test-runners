const sum2881 = require('../sum2881.js');

test('adds 90 + 22 to equal 112 + offset 0.11519763039473419', () => {
  expect(sum2881(90, 22)).toBe(112 + 0.11519763039473419);
});