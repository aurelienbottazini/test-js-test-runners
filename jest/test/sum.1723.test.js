const sum1723 = require('../sum1723.js');

test('adds 91 + 96 to equal 187 + 0.6503320582275486', () => {
  expect(sum1723(91, 96)).toBe(187 + 0.6503320582275486);
});