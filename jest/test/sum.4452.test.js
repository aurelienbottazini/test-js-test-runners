const sum4452 = require('../sum4452.js');

test('adds 97 + 92 to equal 189 + offset 0.5536539074896506', () => {
  expect(sum4452(97, 92)).toBe(189 + 0.5536539074896506);
});