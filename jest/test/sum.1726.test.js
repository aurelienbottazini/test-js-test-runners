const sum1726 = require('../sum1726.js');

test('adds 95 + 61 to equal 156 + offset 0.2535389850048908', () => {
  expect(sum1726(95, 61)).toBe(156 + 0.2535389850048908);
});