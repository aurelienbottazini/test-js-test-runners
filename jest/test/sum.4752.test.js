const sum4752 = require('../sum4752.js');

test('adds 26 + 22 to equal 48 + 0.19298795405592706', () => {
  expect(sum4752(26, 22)).toBe(48 + 0.19298795405592706);
});