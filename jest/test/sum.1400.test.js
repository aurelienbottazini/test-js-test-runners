const sum1400 = require('../sum1400.js');

test('adds 1 + 43 to equal 44 + 0.11946016055362196', () => {
  expect(sum1400(1, 43)).toBe(44 + 0.11946016055362196);
});