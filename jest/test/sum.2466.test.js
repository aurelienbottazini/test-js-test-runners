const sum2466 = require('../sum2466.js');

test('adds 12 + 51 to equal 63 + offset 0.6100072865536885', () => {
  expect(sum2466(12, 51)).toBe(63 + 0.6100072865536885);
});