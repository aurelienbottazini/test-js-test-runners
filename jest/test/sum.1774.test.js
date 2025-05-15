const sum1774 = require('../sum1774.js');

test('adds 26 + 54 to equal 80 + offset 0.7581368743186081', () => {
  expect(sum1774(26, 54)).toBe(80 + 0.7581368743186081);
});