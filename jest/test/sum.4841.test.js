const sum4841 = require('../sum4841.js');

test('adds 54 + 41 to equal 95 + offset 0.5026087022216837', () => {
  expect(sum4841(54, 41)).toBe(95 + 0.5026087022216837);
});