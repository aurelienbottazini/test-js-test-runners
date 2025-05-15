const sum3603 = require('../sum3603.js');

test('adds 87 + 51 to equal 138 + 0.38324081979333746', () => {
  expect(sum3603(87, 51)).toBe(138 + 0.38324081979333746);
});