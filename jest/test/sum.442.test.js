const sum442 = require('../sum442.js');

test('adds 37 + 61 to equal 98 + offset 0.6736249251733086', () => {
  expect(sum442(37, 61)).toBe(98 + 0.6736249251733086);
});