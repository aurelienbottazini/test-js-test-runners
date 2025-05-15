const sum1848 = require('../sum1848.js');

test('adds 99 + 46 to equal 145 + 0.3377406446553902', () => {
  expect(sum1848(99, 46)).toBe(145 + 0.3377406446553902);
});