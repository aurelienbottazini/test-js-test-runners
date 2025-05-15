const sum4587 = require('../sum4587.js');

test('adds 95 + 23 to equal 118 + offset 0.5530193160904374', () => {
  expect(sum4587(95, 23)).toBe(118 + 0.5530193160904374);
});