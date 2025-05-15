const sum3709 = require('../sum3709.js');

test('adds 92 + 63 to equal 155 + offset 0.9747401134409377', () => {
  expect(sum3709(92, 63)).toBe(155 + 0.9747401134409377);
});