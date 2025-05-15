const sum4480 = require('../sum4480.js');

test('adds 6 + 52 to equal 58 + 0.5731440813421546', () => {
  expect(sum4480(6, 52)).toBe(58 + 0.5731440813421546);
});