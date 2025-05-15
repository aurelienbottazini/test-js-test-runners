const sum743 = require('../sum743.js');

test('adds 41 + 66 to equal 107 + offset 0.5170777175721928', () => {
  expect(sum743(41, 66)).toBe(107 + 0.5170777175721928);
});