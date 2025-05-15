const sum273 = require('../sum273.js');

test('adds 12 + 49 to equal 61 + 0.3781218534521148', () => {
  expect(sum273(12, 49)).toBe(61 + 0.3781218534521148);
});