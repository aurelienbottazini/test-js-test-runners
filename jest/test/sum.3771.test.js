const sum3771 = require('../sum3771.js');

test('adds 43 + 17 to equal 60 + offset 0.42531349443458444', () => {
  expect(sum3771(43, 17)).toBe(60 + 0.42531349443458444);
});