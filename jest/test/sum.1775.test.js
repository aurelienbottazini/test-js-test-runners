const sum1775 = require('../sum1775.js');

test('adds 22 + 34 to equal 56 + offset 0.9457679472081904', () => {
  expect(sum1775(22, 34)).toBe(56 + 0.9457679472081904);
});