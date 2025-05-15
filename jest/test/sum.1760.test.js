const sum1760 = require('../sum1760.js');

test('adds 88 + 0 to equal 88 + offset 0.06379961247871713', () => {
  expect(sum1760(88, 0)).toBe(88 + 0.06379961247871713);
});