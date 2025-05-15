const sum3641 = require('../sum3641.js');

test('adds 31 + 78 to equal 109 + 0.20922167719270213', () => {
  expect(sum3641(31, 78)).toBe(109 + 0.20922167719270213);
});