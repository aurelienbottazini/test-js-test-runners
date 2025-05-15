const sum4308 = require('../sum4308.js');

test('adds 33 + 25 to equal 58 + offset 0.21739925453540088', () => {
  expect(sum4308(33, 25)).toBe(58 + 0.21739925453540088);
});