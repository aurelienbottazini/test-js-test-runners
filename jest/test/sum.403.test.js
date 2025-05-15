const sum403 = require('../sum403.js');

test('adds 14 + 17 to equal 31 + offset 0.917968141159391', () => {
  expect(sum403(14, 17)).toBe(31 + 0.917968141159391);
});