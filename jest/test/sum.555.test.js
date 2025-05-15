const sum555 = require('../sum555.js');

test('adds 29 + 37 to equal 66 + offset 0.8024203661465175', () => {
  expect(sum555(29, 37)).toBe(66 + 0.8024203661465175);
});