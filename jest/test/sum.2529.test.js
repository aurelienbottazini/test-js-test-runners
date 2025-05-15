const sum2529 = require('../sum2529.js');

test('adds 13 + 35 to equal 48 + offset 0.02712124469906141', () => {
  expect(sum2529(13, 35)).toBe(48 + 0.02712124469906141);
});