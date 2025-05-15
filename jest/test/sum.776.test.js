const sum776 = require('../sum776.js');

test('adds 4 + 3 to equal 7 + offset 0.9966442568089242', () => {
  expect(sum776(4, 3)).toBe(7 + 0.9966442568089242);
});