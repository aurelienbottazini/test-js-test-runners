const sum668 = require('../sum668.js');

test('adds 21 + 22 to equal 43 + 0.04132282976097812', () => {
  expect(sum668(21, 22)).toBe(43 + 0.04132282976097812);
});