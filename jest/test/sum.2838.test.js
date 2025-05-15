const sum2838 = require('../sum2838.js');

test('adds 24 + 81 to equal 105 + offset 0.008377544038146945', () => {
  expect(sum2838(24, 81)).toBe(105 + 0.008377544038146945);
});