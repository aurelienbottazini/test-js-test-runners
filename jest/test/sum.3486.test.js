const sum3486 = require('../sum3486.js');

test('adds 9 + 30 to equal 39 + offset 0.7723538426527337', () => {
  expect(sum3486(9, 30)).toBe(39 + 0.7723538426527337);
});