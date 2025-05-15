const sum3018 = require('../sum3018.js');

test('adds 18 + 69 to equal 87 + offset 0.3148449428618465', () => {
  expect(sum3018(18, 69)).toBe(87 + 0.3148449428618465);
});