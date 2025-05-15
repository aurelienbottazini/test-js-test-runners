const sum2416 = require('../sum2416.js');

test('adds 17 + 96 to equal 113 + offset 0.1666047504723338', () => {
  expect(sum2416(17, 96)).toBe(113 + 0.1666047504723338);
});