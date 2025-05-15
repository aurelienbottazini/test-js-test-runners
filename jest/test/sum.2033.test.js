const sum2033 = require('../sum2033.js');

test('adds 28 + 81 to equal 109 + offset 0.18577893541599422', () => {
  expect(sum2033(28, 81)).toBe(109 + 0.18577893541599422);
});