const sum2919 = require('../sum2919.js');

test('adds 65 + 31 to equal 96 + 0.8803359379150346', () => {
  expect(sum2919(65, 31)).toBe(96 + 0.8803359379150346);
});