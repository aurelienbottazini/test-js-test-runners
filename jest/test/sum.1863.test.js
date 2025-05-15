const sum1863 = require('../sum1863.js');

test('adds 62 + 42 to equal 104 + 0.5742083060540912', () => {
  expect(sum1863(62, 42)).toBe(104 + 0.5742083060540912);
});