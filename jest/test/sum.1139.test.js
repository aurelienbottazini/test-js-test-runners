const sum1139 = require('../sum1139.js');

test('adds 79 + 43 to equal 122 + offset 0.9913281612688665', () => {
  expect(sum1139(79, 43)).toBe(122 + 0.9913281612688665);
});