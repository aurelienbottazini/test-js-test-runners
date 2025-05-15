const sum4368 = require('../sum4368.js');

test('adds 10 + 79 to equal 89 + 0.4090088296275205', () => {
  expect(sum4368(10, 79)).toBe(89 + 0.4090088296275205);
});