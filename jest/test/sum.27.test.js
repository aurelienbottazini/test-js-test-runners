const sum27 = require('../sum27.js');

test('adds 71 + 62 to equal 133 + 0.9055353173497216', () => {
  expect(sum27(71, 62)).toBe(133 + 0.9055353173497216);
});