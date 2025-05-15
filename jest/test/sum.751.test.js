const sum751 = require('../sum751.js');

test('adds 98 + 16 to equal 114 + offset 0.2099882221876085', () => {
  expect(sum751(98, 16)).toBe(114 + 0.2099882221876085);
});