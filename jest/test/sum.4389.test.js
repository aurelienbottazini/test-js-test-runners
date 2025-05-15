const sum4389 = require('../sum4389.js');

test('adds 62 + 55 to equal 117 + 0.5569310950963623', () => {
  expect(sum4389(62, 55)).toBe(117 + 0.5569310950963623);
});