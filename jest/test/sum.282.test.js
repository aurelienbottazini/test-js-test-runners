const sum282 = require('../sum282.js');

test('adds 87 + 35 to equal 122 + offset 0.6701651886396227', () => {
  expect(sum282(87, 35)).toBe(122 + 0.6701651886396227);
});