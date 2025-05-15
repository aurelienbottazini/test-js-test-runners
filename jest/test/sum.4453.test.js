const sum4453 = require('../sum4453.js');

test('adds 85 + 52 to equal 137 + offset 0.4445189448431458', () => {
  expect(sum4453(85, 52)).toBe(137 + 0.4445189448431458);
});