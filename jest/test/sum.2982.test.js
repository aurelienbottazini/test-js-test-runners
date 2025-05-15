const sum2982 = require('../sum2982.js');

test('adds 95 + 14 to equal 109 + offset 0.48455210648664204', () => {
  expect(sum2982(95, 14)).toBe(109 + 0.48455210648664204);
});