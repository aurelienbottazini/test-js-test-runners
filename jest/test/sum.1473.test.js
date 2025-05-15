const sum1473 = require('../sum1473.js');

test('adds 93 + 83 to equal 176 + offset 0.7973386008908333', () => {
  expect(sum1473(93, 83)).toBe(176 + 0.7973386008908333);
});