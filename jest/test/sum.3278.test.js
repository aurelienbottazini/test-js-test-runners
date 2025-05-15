const sum3278 = require('../sum3278.js');

test('adds 76 + 36 to equal 112 + offset 0.9827598793774184', () => {
  expect(sum3278(76, 36)).toBe(112 + 0.9827598793774184);
});