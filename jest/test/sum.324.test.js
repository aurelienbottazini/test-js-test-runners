const sum324 = require('../sum324.js');

test('adds 98 + 69 to equal 167 + offset 0.07299487278228556', () => {
  expect(sum324(98, 69)).toBe(167 + 0.07299487278228556);
});