const sum4270 = require('../sum4270.js');

test('adds 1 + 21 to equal 22 + 0.9817777623652701', () => {
  expect(sum4270(1, 21)).toBe(22 + 0.9817777623652701);
});