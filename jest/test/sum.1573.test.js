const sum1573 = require('../sum1573.js');

test('adds 74 + 30 to equal 104 + offset 0.31132706949434386', () => {
  expect(sum1573(74, 30)).toBe(104 + 0.31132706949434386);
});