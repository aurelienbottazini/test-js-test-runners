const sum2495 = require('../sum2495.js');

test('adds 33 + 39 to equal 72 + offset 0.859676829830287', () => {
  expect(sum2495(33, 39)).toBe(72 + 0.859676829830287);
});