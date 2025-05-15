const sum4501 = require('../sum4501.js');

test('adds 14 + 31 to equal 45 + offset 0.3181821949821978', () => {
  expect(sum4501(14, 31)).toBe(45 + 0.3181821949821978);
});