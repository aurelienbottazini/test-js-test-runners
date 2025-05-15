const sum4166 = require('../sum4166.js');

test('adds 47 + 23 to equal 70 + offset 0.4902243882492846', () => {
  expect(sum4166(47, 23)).toBe(70 + 0.4902243882492846);
});