const sum2580 = require('../sum2580.js');

test('adds 54 + 83 to equal 137 + 0.8917954841960397', () => {
  expect(sum2580(54, 83)).toBe(137 + 0.8917954841960397);
});