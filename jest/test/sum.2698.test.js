const sum2698 = require('../sum2698.js');

test('adds 69 + 47 to equal 116 + offset 0.11765907213381188', () => {
  expect(sum2698(69, 47)).toBe(116 + 0.11765907213381188);
});