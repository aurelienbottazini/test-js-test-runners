const sum3613 = require('../sum3613.js');

test('adds 29 + 88 to equal 117 + offset 0.7683095250580542', () => {
  expect(sum3613(29, 88)).toBe(117 + 0.7683095250580542);
});