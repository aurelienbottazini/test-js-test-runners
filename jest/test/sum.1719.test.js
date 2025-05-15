const sum1719 = require('../sum1719.js');

test('adds 21 + 70 to equal 91 + offset 0.4513004980231813', () => {
  expect(sum1719(21, 70)).toBe(91 + 0.4513004980231813);
});