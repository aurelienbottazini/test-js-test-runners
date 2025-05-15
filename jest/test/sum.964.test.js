const sum964 = require('../sum964.js');

test('adds 78 + 9 to equal 87 + offset 0.9489928648917598', () => {
  expect(sum964(78, 9)).toBe(87 + 0.9489928648917598);
});