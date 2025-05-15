const sum270 = require('../sum270.js');

test('adds 29 + 87 to equal 116 + offset 0.5579613609706698', () => {
  expect(sum270(29, 87)).toBe(116 + 0.5579613609706698);
});