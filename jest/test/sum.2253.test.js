const sum2253 = require('../sum2253.js');

test('adds 78 + 74 to equal 152 + 0.1106733569298205', () => {
  expect(sum2253(78, 74)).toBe(152 + 0.1106733569298205);
});