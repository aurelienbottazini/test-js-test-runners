const sum2585 = require('../sum2585.js');

test('adds 91 + 80 to equal 171 + offset 0.924951647849762', () => {
  expect(sum2585(91, 80)).toBe(171 + 0.924951647849762);
});