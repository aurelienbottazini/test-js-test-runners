const sum4629 = require('../sum4629.js');

test('adds 22 + 50 to equal 72 + offset 0.3688923698586595', () => {
  expect(sum4629(22, 50)).toBe(72 + 0.3688923698586595);
});