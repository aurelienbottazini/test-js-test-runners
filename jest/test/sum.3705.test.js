const sum3705 = require('../sum3705.js');

test('adds 98 + 30 to equal 128 + 0.8296293475834444', () => {
  expect(sum3705(98, 30)).toBe(128 + 0.8296293475834444);
});