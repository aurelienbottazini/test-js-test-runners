const sum444 = require('../sum444.js');

test('adds 36 + 25 to equal 61 + 0.8069654479703497', () => {
  expect(sum444(36, 25)).toBe(61 + 0.8069654479703497);
});