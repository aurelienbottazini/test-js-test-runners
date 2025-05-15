const sum1429 = require('../sum1429.js');

test('adds 35 + 86 to equal 121 + offset 0.9677826728727256', () => {
  expect(sum1429(35, 86)).toBe(121 + 0.9677826728727256);
});