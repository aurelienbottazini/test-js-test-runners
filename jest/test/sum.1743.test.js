const sum1743 = require('../sum1743.js');

test('adds 47 + 69 to equal 116 + offset 0.9555762096416541', () => {
  expect(sum1743(47, 69)).toBe(116 + 0.9555762096416541);
});