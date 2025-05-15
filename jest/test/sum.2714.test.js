const sum2714 = require('../sum2714.js');

test('adds 87 + 18 to equal 105 + 0.21882710237065361', () => {
  expect(sum2714(87, 18)).toBe(105 + 0.21882710237065361);
});