const sum3068 = require('../sum3068.js');

test('adds 52 + 65 to equal 117 + 0.6311462530380701', () => {
  expect(sum3068(52, 65)).toBe(117 + 0.6311462530380701);
});