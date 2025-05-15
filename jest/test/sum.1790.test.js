const sum1790 = require('../sum1790.js');

test('adds 27 + 23 to equal 50 + 0.9274850592624702', () => {
  expect(sum1790(27, 23)).toBe(50 + 0.9274850592624702);
});