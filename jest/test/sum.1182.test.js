const sum1182 = require('../sum1182.js');

test('adds 94 + 18 to equal 112 + 0.15088045276937345', () => {
  expect(sum1182(94, 18)).toBe(112 + 0.15088045276937345);
});