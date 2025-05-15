const sum2118 = require('../sum2118.js');

test('adds 62 + 63 to equal 125 + 0.6894102925621366', () => {
  expect(sum2118(62, 63)).toBe(125 + 0.6894102925621366);
});