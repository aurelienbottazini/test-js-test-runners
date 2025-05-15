const sum3406 = require('../sum3406.js');

test('adds 69 + 49 to equal 118 + offset 0.08993397418905835', () => {
  expect(sum3406(69, 49)).toBe(118 + 0.08993397418905835);
});