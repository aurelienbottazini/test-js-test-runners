const sum2542 = require('../sum2542.js');

test('adds 17 + 40 to equal 57 + offset 0.5129252405640539', () => {
  expect(sum2542(17, 40)).toBe(57 + 0.5129252405640539);
});