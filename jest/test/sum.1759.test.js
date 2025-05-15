const sum1759 = require('../sum1759.js');

test('adds 37 + 32 to equal 69 + 0.4019427799154113', () => {
  expect(sum1759(37, 32)).toBe(69 + 0.4019427799154113);
});