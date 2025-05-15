const sum2770 = require('../sum2770.js');

test('adds 87 + 17 to equal 104 + offset 0.8618048641650656', () => {
  expect(sum2770(87, 17)).toBe(104 + 0.8618048641650656);
});