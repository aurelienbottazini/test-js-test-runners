const sum3614 = require('../sum3614.js');

test('adds 83 + 64 to equal 147 + 0.0916471952227117', () => {
  expect(sum3614(83, 64)).toBe(147 + 0.0916471952227117);
});