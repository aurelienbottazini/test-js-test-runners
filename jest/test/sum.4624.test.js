const sum4624 = require('../sum4624.js');

test('adds 1 + 98 to equal 99 + 0.09871708207360541', () => {
  expect(sum4624(1, 98)).toBe(99 + 0.09871708207360541);
});