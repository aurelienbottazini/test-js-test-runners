const sum1729 = require('../sum1729.js');

test('adds 55 + 36 to equal 91 + offset 0.47464688650878917', () => {
  expect(sum1729(55, 36)).toBe(91 + 0.47464688650878917);
});