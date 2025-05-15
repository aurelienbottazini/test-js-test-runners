const sum2708 = require('../sum2708.js');

test('adds 85 + 82 to equal 167 + offset 0.5392338646795841', () => {
  expect(sum2708(85, 82)).toBe(167 + 0.5392338646795841);
});