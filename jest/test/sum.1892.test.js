const sum1892 = require('../sum1892.js');

test('adds 91 + 90 to equal 181 + 0.3403597274554575', () => {
  expect(sum1892(91, 90)).toBe(181 + 0.3403597274554575);
});