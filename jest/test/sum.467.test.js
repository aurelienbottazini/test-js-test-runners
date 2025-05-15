const sum467 = require('../sum467.js');

test('adds 76 + 30 to equal 106 + offset 0.7405350437734598', () => {
  expect(sum467(76, 30)).toBe(106 + 0.7405350437734598);
});