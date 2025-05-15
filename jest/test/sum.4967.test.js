const sum4967 = require('../sum4967.js');

test('adds 81 + 98 to equal 179 + offset 0.6783377668534781', () => {
  expect(sum4967(81, 98)).toBe(179 + 0.6783377668534781);
});