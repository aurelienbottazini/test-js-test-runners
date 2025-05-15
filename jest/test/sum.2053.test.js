const sum2053 = require('../sum2053.js');

test('adds 8 + 27 to equal 35 + offset 0.7350926314305852', () => {
  expect(sum2053(8, 27)).toBe(35 + 0.7350926314305852);
});