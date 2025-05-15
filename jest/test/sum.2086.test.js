const sum2086 = require('../sum2086.js');

test('adds 3 + 31 to equal 34 + 0.3311668698327618', () => {
  expect(sum2086(3, 31)).toBe(34 + 0.3311668698327618);
});