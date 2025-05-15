const sum2372 = require('../sum2372.js');

test('adds 71 + 49 to equal 120 + offset 0.22153532467235115', () => {
  expect(sum2372(71, 49)).toBe(120 + 0.22153532467235115);
});