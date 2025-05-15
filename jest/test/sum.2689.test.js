const sum2689 = require('../sum2689.js');

test('adds 81 + 76 to equal 157 + 0.00789524227483629', () => {
  expect(sum2689(81, 76)).toBe(157 + 0.00789524227483629);
});