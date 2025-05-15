const sum2366 = require('../sum2366.js');

test('adds 55 + 9 to equal 64 + offset 0.2507808014480809', () => {
  expect(sum2366(55, 9)).toBe(64 + 0.2507808014480809);
});