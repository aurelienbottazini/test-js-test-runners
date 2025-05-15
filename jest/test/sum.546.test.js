const sum546 = require('../sum546.js');

test('adds 40 + 78 to equal 118 + offset 0.28894876359078514', () => {
  expect(sum546(40, 78)).toBe(118 + 0.28894876359078514);
});