const sum4869 = require('../sum4869.js');

test('adds 49 + 55 to equal 104 + offset 0.25476487805011816', () => {
  expect(sum4869(49, 55)).toBe(104 + 0.25476487805011816);
});