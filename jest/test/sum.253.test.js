const sum253 = require('../sum253.js');

test('adds 12 + 43 to equal 55 + 0.061022579121676856', () => {
  expect(sum253(12, 43)).toBe(55 + 0.061022579121676856);
});