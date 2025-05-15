const sum4815 = require('../sum4815.js');

test('adds 86 + 29 to equal 115 + offset 0.3771368217368867', () => {
  expect(sum4815(86, 29)).toBe(115 + 0.3771368217368867);
});