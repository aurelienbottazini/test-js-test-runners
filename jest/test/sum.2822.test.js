const sum2822 = require('../sum2822.js');

test('adds 30 + 56 to equal 86 + offset 0.0706995496952203', () => {
  expect(sum2822(30, 56)).toBe(86 + 0.0706995496952203);
});