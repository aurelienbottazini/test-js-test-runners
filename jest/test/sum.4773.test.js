const sum4773 = require('../sum4773.js');

test('adds 54 + 94 to equal 148 + 0.36524655187210986', () => {
  expect(sum4773(54, 94)).toBe(148 + 0.36524655187210986);
});