const sum2734 = require('../sum2734.js');

test('adds 14 + 30 to equal 44 + 0.7856571240680735', () => {
  expect(sum2734(14, 30)).toBe(44 + 0.7856571240680735);
});