const sum4218 = require('../sum4218.js');

test('adds 62 + 36 to equal 98 + 0.7241700023489507', () => {
  expect(sum4218(62, 36)).toBe(98 + 0.7241700023489507);
});