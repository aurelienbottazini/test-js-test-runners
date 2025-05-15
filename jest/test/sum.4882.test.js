const sum4882 = require('../sum4882.js');

test('adds 89 + 92 to equal 181 + 0.3850596450446756', () => {
  expect(sum4882(89, 92)).toBe(181 + 0.3850596450446756);
});